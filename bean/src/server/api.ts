import { TaskController } from "@/shared/TaskController";
import { remultExpress } from "remult/remult-express";
import { Task } from "shared/task";
import { createPostgresConnection } from "remult/postgres";
import { Users } from "@/shared/user";
import { Orders } from "@/shared/order";
import { Order_detail } from "@/shared/order_detail";
import { Product } from "@/shared/product";

export const api = remultExpress({
    entities:[Task, Users, Orders, Order_detail,Product],
    controllers:[TaskController],
    getUser: (req) => req.session!["user"],
    dataProvider: createPostgresConnection({
        
        connectionString:
        process.env["DATABASE_URL"] ||
         "postgresql://postgres:0024@localhost:3000/postgres"
    }),

});