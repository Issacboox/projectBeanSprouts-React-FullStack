import { TaskController } from "@/shared/TaskController";
import { remultExpress } from "remult/remult-express";
import { Task } from "shared/task";
import { createPostgresConnection } from "remult/postgres";

export const api = remultExpress({
    entities:[Task],
    controllers:[TaskController],
    getUser: (req) => req.session!["user"],
    dataProvider: createPostgresConnection({
        
        connectionString:
        process.env["DATABASE_URL"] ||
         "postgresql://postgres:0024@localhost:3000/postgres"
    }),

});