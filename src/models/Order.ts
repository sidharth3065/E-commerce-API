import {
  Column,
  Model,
  Sequelize,
  Table,
  DataType,
  AutoIncrement,
  PrimaryKey,
  NotNull,
  AllowNull,
  ForeignKey,
} from "sequelize-typescript";
import { DataTypes } from "sequelize";

import sequelize from "../utils/database";
import { Users } from "./Users";
import { Field, ID, ObjectType } from "type-graphql";
import { type } from "os";

@Table
@ObjectType()
export class Order extends Model {
  @Field(type=>ID)
  @AutoIncrement
  @PrimaryKey
  @Column(DataTypes.INTEGER)
  id!: number;

  @Field()
  @AllowNull(false)
  @Column(DataTypes.STRING)
  address!: string;

  @Field()
  @AllowNull(false)
  @Column(DataTypes.STRING)
  phoneNumber!: string;

  @Field()
  @AllowNull(false)
  @Column(DataTypes.STRING)
  total!: string;

  @Field()
  @AllowNull(true)
  @ForeignKey(() => Users)
  @Column(DataTypes.INTEGER)
  UserId!: number;
}
