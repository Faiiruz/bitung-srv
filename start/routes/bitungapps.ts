import Route from "@ioc:Adonis/Core/Route";

Route.get("/bitungapps", "BitungsController.index");
Route.get("/bitungapps/:id", "BitungsController.show");
Route.post("/bitungapps", "BitungsController.store");
Route.put("/bitungapps/:id", "BitungsController.update");
Route.delete("/bitungapps/:id", "BitungsController.destroy");
