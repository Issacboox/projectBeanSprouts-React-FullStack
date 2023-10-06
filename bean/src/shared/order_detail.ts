import { Entity, Fields } from 'remult';

@Entity('order_detail', {
    allowApiCrud : true
})

export class Order_detail {
    @Fields.autoIncrement()
    detail_id = 0 ;

    @Fields.integer()
    order_id = 0 ;

    @Fields.number()
    detail_cost = 0.0;

    @Fields.integer()
    detail_qty = 0 ;

    @Fields.integer()
    prod_id = 0 ;
}