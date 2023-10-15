import { useEffect, useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { useShoppingCart } from '../context/shoppingCartContext';
import { Product } from '@/shared/product';
import { remult } from 'remult';

export default function Store() {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        // Fetch all products from the database using Remult
        const productRepo = remult.repo(Product);
        productRepo.find({}).then((data) => {
            setProducts(data);
        });
    }, []);

    return (
        <div className='content'>
            <h2 className='text-center mt-4 mb-4'>ยินดีต้อนรับสู่ร้านค้า</h2>
            <main>
                <Row className="g-3">
                    {products.map((product) => (
                        <Col md={4} xs={6} lg={3} key={product.prod_id}>
                            <Card className='h-100'>
                                <Card.Img variant="top" src={product.img_url} height={200} style={{ objectFit: "cover" }} />
                                <Card.Body className='d-flex flex-column'>
                                    <Card.Title className='d-flex justify-content-space-between align-items-baseline mb-4'>
                                        <span className='fs-2'>{product.prod_name}</span>
                                        <span className='ms-2 text-muted'>{product.prod_price} บาท</span>
                                    </Card.Title>
                                    <div className="mt-auto">
                                        {getItemQuantity(product.prod_id) === 0 ? (
                                            <Button className='w-100' onClick={() => increaseCartQuantity(product.prod_id)}>
                                                + เพิ่มลงตระกร้า
                                            </Button>
                                        ) : (
                                            <div className="d-flex align-item-center flex-column" style={{ gap: ".5rem" }}>
                                                <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                                                    <Button onClick={() => decreaseCartQuantity(product.prod_id)}>-</Button>
                                                    <div>
                                                        <span className="fs-3">{getItemQuantity(product.prod_id)} กิโล</span>
                                                    </div>
                                                    <Button onClick={() => increaseCartQuantity(product.prod_id)}>+</Button>
                                                </div>
                                                <Button variant='danger' className='btn btn-sm' onClick={() => removeFromCart(product.prod_id)}>
                                                    นำออกจากตระกร้า
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </main>
        </div>
    );
}
