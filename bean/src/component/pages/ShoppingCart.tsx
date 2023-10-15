import { useEffect, useState } from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "@/component/context/shoppingCartContext";
import { CartItem } from "./CartItems";
import { Product } from "@/shared/product";
import { remult } from "remult";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch all products from the database using Remult
    const productRepo = remult.repo(Product);

    productRepo.find({}).then((data) => {
      setProducts(data);
    });
  }, []);

  // Calculate the total cost of items in the cart
  const totalCost = cartItems.reduce((total, cartItem) => {
    const product = products.find((p) => p.prod_id === cartItem.id);

    if (!product) {
      return total;
    }

    return total + product.prod_price * cartItem.quantity;
  }, 0);

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => {
            const product = products.find((p) => p.prod_id === item.id);

            if (!product) {
              return null;
            }

            return (
              <CartItem product={product} quantity={item.quantity} key={item.id} />
            );
          })}
          <div className="ms-auto f-bold fs-s">
            Total ${totalCost.toFixed(2)}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
