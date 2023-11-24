import Route from "@ioc:Adonis/Core/Route";

Route.get("/gwsapps", "GwsappsController.index");
Route.get("/gwsapps/:id", "GwsappsController.show");
Route.post("/gwsapps", "GwsappsController.store");
Route.put("/gwsapps/:id", "GwsappsController.update");
Route.delete("/gwsapps/:id", "GwsappsController.destroy");
