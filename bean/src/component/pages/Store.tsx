import { useEffect, useState } from 'react'; 
import { Product } from '@/shared/product';
import { remult } from "remult";

const productRepo = remult.repo(Product);

export default function Store() {
  const [products, setProducts] = useState<Product[]>([]); // Corrected variable name
  useEffect(() => {
    return productRepo.liveQuery({
      where: {
        prod_status: 1
      }
    }).subscribe(info => {
      setProducts(info.applyChanges);
    });
  }, []);

  return (
    <div className='content'>
      <h1>ร้านขายถั่วงอก</h1>
      <main>
        {products.map((product) => (
          <div key={product.prod_id}>          
            <h2>{product.prod_name}</h2>
            <p>Price: {product.prod_price}</p>
            <p>Quantity: {product.prod_qty}</p>
          </div>
        ))}
      </main>
    </div>
  )
}
