// import React, {useEffect, useState} from "react";
// import {Hrana} from "@/Pages/Hrana";
// import DeleteRestaurant from "@/Pages/DeleteRestaurant";
// import Modal from "react-modal";
// import {CartContext, CartProvider} from "@/Pages/CartContext";
// import {Cart} from "@/Pages/Cart";
// import {RestaurantData} from "@/Pages/RestaurantData";
//
//
// export const ActiveOrders = (props) => {
//
//
//     const [ordersActive, setOrdersActive] = useState('');
//
//
//     useEffect(() => {
//         let isMounted = true;
//         fetch(route('activeOrders'))
//             // fetch('http://192.168.31.230/api/v1/restaurants/')
//
//             .then(res => {
//                 return res.json()
//             })
//             .then(data => {
//                 if (isMounted) setOrdersActive(data);
//             })
//
//         return () => {
//             isMounted = false
//         };
//     }, []);
//
//
//     const changeOrderStatus = (e, id, value) => {
//         e.preventDefault();
//         setOrdersActive(ordersActive => ordersActive.filter((_, i) => i !== value));
//         console.log('change');
//         axios.put(`http://127.0.0.1:8000/api/v1/orders/${id}`)
//
//
//     }
//
//
//     return (
//         <div>
//             <div>
//
//
//                 {ordersActive && ordersActive.map((k, value) => (
//                     <div>
//                         <div>
//                             {/*<p >{restaurant.id}</p>*/}
//
//                             <p>Order ID: {k.id}</p>
//                             <p>Status: {k.active}</p>
//                             <button onClick={(e) => changeOrderStatus(e, k.id, value)}> Change status</button>
//
//                             <p>Address: {k.address}</p>
//                             <p>Price: {k.price}</p>
//
//
//
//
//                             <p>Food: </p>
//
//                             {k && k.food.map((a) =>
//                                 (
//                                     <div>
//                                     <p>{a.name}</p>
//                                     <p>Restaurant ID: {a.restaurant_id}</p>
//                                     </div>
//                                 ))}
//
//                             <hr/>
//                             <br/>
//                         </div>
//
//                         <div>
//
//                         </div>
//
//                     </div>
//
//
//                 ))}
//
//
//             </div>
//
//         </div>
//
//
//     )
//
// }
