// import { useState } from 'react';
// import Bean from '@/assets/product/beansprouts.png';
// import Sunflower from '@/assets/product/sunflower-sprouts.png';
// import Cart from '@/assets/product/cart.png';
// import Swal from 'sweetalert2';

type Props = {};

export default function Store({}: Props) {
//   const [cart, setCart] = useState<{ productName: string; quantity: number }[]>(
//     []
//   );

//   // Function to add an item to the cart
//   const addToCart = (productName: string) => {
//     const itemIndex = cart.findIndex((item) => item.productName === productName);
//     if (itemIndex !== -1) {
//       // If the item already exists in the cart, update the quantity
//       const updatedCart = [...cart];
//       updatedCart[itemIndex].quantity += 1;
//       setCart(updatedCart);
//     } else {
//       // If the item doesn't exist in the cart, add it with a quantity of 1
//       setCart([...cart, { productName, quantity: 1 }]);
//     }
//   };

//   // Function to remove an item from the cart
//   const removeFromCart = (productName: string) => {
//     const updatedCart = cart.filter((item) => item.productName !== productName);
//     setCart(updatedCart);
//   };

//   // Function to show a success notification
//   const showSuccessNotification = () => {
//     Swal.fire({
//       icon: 'success',
//       title: 'Item added to cart',
//       showConfirmButton: false,
//       timer: 1500, // Close the notification after 1.5 seconds
//     });
//   };

  return (
    <></>
    // <div className='content'>
    //   <div className='store-cart'>
    //     <img src={Cart} alt='' width={40} />
    //   </div>
    //   <div className='store-page p-3'>
    //     <div className='products-store'>
    //       <div className='productbox'>
    //         <img src={Bean} alt='Product 1' width={300} className='imgProduct' />
    //         <p className='productName'>ถั่วงอก</p>
    //         <p>Lot 24/09/2023</p>
    //         <p>ราคา 20 บาท / กิโลกรัม</p>
    //         <button
    //           className='addtoCartBTN'
    //           onClick={() => {
    //             addToCart('ถั่วงอก');
    //             showSuccessNotification(); // Show a success notification
    //           }}
    //         >
    //           เพิ่มลงตระกร้า
    //         </button>
    //       </div>
    //       <div className='productbox'>
    //         <img src={Sunflower} alt='Product 2' width={300} className='imgProduct' />
    //         <p className='productName'>ต้นอ่อนทานตะวัน</p>
    //         <p>Lot 24/09/2023</p>
    //         <p>ราคา 20 บาท / กิโลกรัม</p>
    //         <button
    //           className='addtoCartBTN'
    //           onClick={() => {
    //             addToCart('ต้นอ่อนทานตะวัน');
    //             showSuccessNotification(); // Show a success notification
    //           }}
    //         >
    //           เพิ่มลงตระกร้า
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Cart Modal */}
    //   {cart.length > 0 && (
    //     <div className='fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none'>
    //       <div className='relative w-auto max-w-lg mx-auto my-6'>
    //         {/*content*/}
    //         <div className='modal-container bg-black dark:bg-gray-800 dark:text-white dark:border-gray-700 mx-auto max-w-md p-3'>
    //           {/*header*/}
    //           <div className='modal-header'>
    //             <h5 className='modal-title'>Cart</h5>
    //             <button
    //               className='btn-close'
    //               onClick={() => {
    //                 setCart([]); // Clear the cart when closing the modal
    //               }}
    //             ></button>
    //           </div>
    //           {/*body*/}
    //           <div className='modal-body'>
    //             <ul>
    //               {cart.map((item, index) => (
    //                 <li key={index}>
    //                   <div className='flex items-center space-x-2'>
    //                     <img
    //                       src={
    //                         item.productName === 'ถั่วงอก'
    //                           ? Bean
    //                           : item.productName === 'ต้นอ่อนทานตะวัน'
    //                           ? Sunflower
    //                           : ''
    //                       }
    //                       alt={item.productName}
    //                       width={40}
    //                     />
    //                     <span>{item.productName}</span>
    //                     <button
    //                       className='btn btn-danger'
    //                       onClick={() => removeFromCart(item.productName)}
    //                     >
    //                       Remove
    //                     </button>
    //                   </div>
    //                   <div>
    //                     Quantity: {item.quantity}{' '}
    //                     <button
    //                       onClick={() => {
    //                         // Increase the quantity by 1
    //                         const updatedCart = [...cart];
    //                         updatedCart[index].quantity += 1;
    //                         setCart(updatedCart);
    //                       }}
    //                     >
    //                       +
    //                     </button>
    //                     <button
    //                       onClick={() => {
    //                         // Decrease the quantity by 1
    //                         const updatedCart = [...cart];
    //                         if (updatedCart[index].quantity > 1) {
    //                           updatedCart[index].quantity -= 1;
    //                           setCart(updatedCart);
    //                         }
    //                       }}
    //                     >
    //                       -
    //                     </button>
    //                   </div>
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //           {/*footer*/}
    //           <div className='modal-footer'>
    //             <button
    //               className='btn btn-secondary'
    //               onClick={() => {
    //                 setCart([]); // Clear the cart when closing the modal
    //               }}
    //             >
    //               Close
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
}
