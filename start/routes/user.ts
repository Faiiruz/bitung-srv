import Route from "@ioc:Adonis/Core/Route";

Route.post("/register", "AuthController.register");
Route.post("/login", "AuthController.login");
