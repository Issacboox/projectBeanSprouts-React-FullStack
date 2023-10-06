import { BackendMethod, Entity, Fields, Remult, Validators } from "remult";

@Entity("users", {
  allowApiCrud: true,
})
export class Users {
  @Fields.autoIncrement()
  id = 0;

  @Fields.string({
    validate: Validators.required,
  })
  username = "";

  @Fields.string({
    validate: Validators.required,
  })
  line_id = "";

  @Fields.string({
    validate: Validators.required,
  })
  password = "";

  @Fields.string()
  address = "";

  @Fields.string()
  phone = "";

}

export class UserController {
  constructor(private remult: Remult) {}

  @BackendMethod({ allowed: true })
  async createUser(users: Users) {
    const savedUser = await this.remult.repo(Users).create(users);
    return savedUser;
  }
}
