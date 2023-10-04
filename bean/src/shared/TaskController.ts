import {Allow, BackendMethod, remult} from "remult";
import { Task } from "./task";

export class TaskController {
    @BackendMethod({ allowed: Allow.authenticated  })
    static async setAllCompleted(complete: boolean) {
        const taskRepo = remult.repo(Task);     
        for (const task of await taskRepo.find()){
          await taskRepo.save({...task,complete});
        }
      }
}