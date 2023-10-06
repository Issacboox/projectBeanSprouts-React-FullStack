import { Allow, Entity, Fields, Validators } from "remult";

@Entity("tasks" , {
    allowApiCrud: Allow.authenticated,
    allowApiDelete: "admin",
    allowApiInsert: "admin",
})
export class Task {
    @Fields.autoIncrement()
    id = 0;

    @Fields.string({
        validate:Validators.required
    })
    title = "";
    
    @Fields.boolean()
    complete = false ;
}