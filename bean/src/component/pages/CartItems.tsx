// import React from "react";
import { useShoppingCart } from "../context/shoppingCartContext";
import { Stack, Button } from "react-bootstrap";
import { Product } from "@/shared/product";


type CartItemProps = {
  product: Product;
  quantity: number;

};

export function CartItem({ product, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  if (!product) return null;

  return (
    <>
      <Stack direction="horizontal" gap={2} className="d-flex align-item-center">
        <img
          src={product.img_url}
          style={{ width: "125px", height: "75px", objectFit: "cover" }}
        />

        <div className="me-auto">
          <div>
            {product.prod_name}{" "}
            {quantity > 1 && (
              <span className="text-muted" style={{ fontSize: ".65rem" }}>
                x{quantity}
              </span>
            )}
          </div>
          <div className="text-muted" style={{ fontSize: ".75rem" }}>
            {product.prod_price}
          </div>
        </div>
        <div>{product.prod_price * quantity}</div>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeFromCart(product.prod_id)}
        >
          &times;
        </Button>
      </Stack>
    </>
  );
}
