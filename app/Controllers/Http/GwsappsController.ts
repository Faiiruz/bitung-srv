import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { v4 as uuidv4 } from "uuid";
import Google from "App/Models/Gwsapp";

export default class GwsappsController {
  public async index() {
    return await Google.all();
  }

  public async show({ params }: HttpContextContract) {
    return await Google.findOrFail(params.id);
  }

  public async store({ request, auth }: HttpContextContract) {
    try {
      const file = request.file("file");
      const { title, link } = request.only(["title", "link"]);

      if (file) {
        const fileName = `${uuidv4()}.${file.extname}`;
        await file.move("public/uploads", {
          name: fileName,
        });

        const image = new Google();
        image.title = title;
        image.link = link;
        image.fileName = fileName;

        // Menggunakan ID pengguna yang sedang login
        // const userId = auth.user!.id;

        // Menggunakan relasi untuk menyimpan gambar ke pengguna yang login
        await auth.user?.related("gws").create({ title, link, fileName });

        return image;
      } else {
        return { error: "File tidak ditemukan" };
      }
    } catch (error) {
      return { error: "Terjadi kesalahan saat mengunggah gambar" };
    }
  }

  public async update({ params, request }: HttpContextContract) {
    const { title, link } = request.only(["title", "link"]);
    const image = await Google.findOrFail(params.id);

    image.title = title;
    image.link = link;
    await image.save();

    return image;
  }

  public async destroy({ params }: HttpContextContract) {
    const image = await Google.findOrFail(params.id);
    await image.delete();

    return { message: "Image deleted" };
  }
}
