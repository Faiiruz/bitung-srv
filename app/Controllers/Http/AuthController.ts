import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class AuthController {
  async register({ auth, request, response }: HttpContextContract) {
    try {
      const { email, password } = request.body();

      const user = await User.create({
        email,
        password,
      });
      const token = await auth.use("api").attempt(email, password);
      return {
        user,
        token,
      };
    } catch (error) {
      response.unauthorized("");
    }
  }

  async login({ auth, request, response }: HttpContextContract) {
    try {
      const { email, password } = request.body();

      const token = await auth.use("api").attempt(email, password);
      return token;
    } catch {
      response.unauthorized("Email Atau Password salah");
    }
  }
}
