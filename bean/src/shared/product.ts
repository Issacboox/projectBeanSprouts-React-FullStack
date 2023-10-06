import { Entity, Fields, Validators } from "remult";

enum ProductStatus {
  Have = 1,
  SoldOut = 0,
}

@Entity("product", {
  allowApiCrud: true,
})
export class Product {
  @Fields.autoIncrement()
  prod_id = 0;

  @Fields.string({
    validate: Validators.required,
  })
  prod_name = "";
  
  @Fields.number()
  prod_price = 0.0 ;

  @Fields.number()
  prod_qty = 0; // Assuming prod_qty is a numeric field

  prod_status = ProductStatus.Have; // Set the default status to "Have"
  // Getter and Setter for prod_status
  get prod_status_enum(): ProductStatus {
    return this.prod_status as ProductStatus;
  }
  set prod_status_enum(status: ProductStatus) {
    this.prod_status = status;
  }
}
