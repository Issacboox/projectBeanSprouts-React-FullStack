import { Entity, Fields, Validators } from "remult";

enum OrderStatus {
  Ordered = 0,
  Processing = 1,
  Shipped = 2,
  Delivered = 3,
  Canceled = 4,
}

@Entity( "orders" , {
    allowApiCrud: true
})
export class Orders {
    @Fields.autoIncrement()
    order_id = 0;

    // @Fields.integer()
    // user_id = 0;

    @Fields.number()
    order_amount = 0;

    @Fields.number()
    order_price = 0.0;

    @Fields.string({
        validate: Validators.required
    })
    order_address = "";

    @Fields.string()
    order_phone = "";

    @Fields.integer()
    order_status = OrderStatus.Ordered;
}
