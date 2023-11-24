import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import User from "App/Models/User";

export default class Google extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public title: string;

  @column()
  public link: string;

  @column()
  public fileName: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>;
}
