import React, {createContext, useContext, useEffect, useRef, useState} from "react";
import Authenticated from '@/Layouts/Authenticated';
import {Hrana} from "@/Pages/Hrana";
import DeleteRestaurant from "@/Pages/DeleteRestaurant";
import Modal from "react-modal";
import {CartContext, CartProvider} from "@/Pages/CartContext";
import {Cart} from "@/Pages/Cart";
import {RestaurantData} from "@/Pages/RestaurantData";
import ValidationErrors from "@/Components/ValidationErrors";
import {ListaHrane} from "@/Pages/ListaHrane";
import {color} from "tailwindcss/lib/util/dataTypes";
import { AiFillEye } from "react-icons/ai";

import classes1 from '../UI/Modal.module.css';
import {ActiveOrders} from "@/Pages/ActiveOrders";
import {AllOrders} from "@/Pages/AllOrders";

import ReactPaginate from 'react-paginate';
import Pagination from "@/Pages/Pagination";
import Orders from "@/Pages/Orders";






export default function ShowActiveOrders(props) {






    const [ordersActive, setOrdersActive] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalData, setModalData] = useState('');

    const [loading,setLoading]=useState(false);
    const [currentPage,setCurrentPage]=useState(1);
    const [ordersPerPage]=useState(5);

    const [user, setUser] = useState("Jesse Hall");


    const scrollRefs = useRef([]);

    scrollRefs.current = [...Array(ordersActive.length).keys()].map(
        (_, i) => scrollRefs.current[i] ?? React.createRef()
    );

    const scrollSmoothHandler = (index) => () => {

        scrollRefs.current[index].current.scrollIntoView({ behavior: "smooth" });
    };


    useEffect(() => {
        let isMounted = true;
        fetch(route('activeOrders'))
            // fetch('http://192.168.31.230/api/v1/restaurants/')

            .then(res => {
                return res.json()
            })
            .then(data => {
                if (isMounted) setOrdersActive(data);
            })

        return () => {
            isMounted = false
        };
    }, []);



    const changeOrderStatus = (e, id, value) => {
        // e.preventDefault();
        setOrdersActive(ordersActive => ordersActive.filter((_, i) => i !== value));

        axios.put(`http://127.0.0.1:8000/api/v1/orders/${id}`)



    }

    const indexOfLastOrder=currentPage * ordersPerPage;
    const indexOfFirstOrder=indexOfLastOrder - ordersPerPage;
    const currentOrders=ordersActive.slice(indexOfFirstOrder,indexOfLastOrder);

    const paginate=(pageNumber)=>setCurrentPage(pageNumber);




    return (


        // <Authenticated
        //     auth={props.auth}
        //     errors={props.errors}
        // >
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200"> {ordersActive.length} Active Orders
                                ! <p style={{float:'right'}}  onClick={() => {setModalIsOpen(true)}}
                                    >Show All Orders</p>

                                <Modal className={classes1.customStyles}   isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                                    <div>

                                       <AllOrders />

                                    </div>
                                </Modal>

                        <Pagination ordersPerPage={ordersPerPage} totalOrders={ordersActive.length} paginate={paginate}></Pagination>
                        <Orders setOrdersActive={setOrdersActive} ordersActive={currentOrders} loading={loading} ></Orders>



                        {/*<table>*/}
                        {/*    <tr>*/}
                        {/*        <th style={{'width':'75px'}}>ID</th>*/}
                        {/*        <th>Address </th>*/}
                        {/*        <th>Created at</th>*/}
                        {/*        <th>Order price</th>*/}
                        {/*        <th>Status</th>*/}
                        {/*        <th>Change status</th>*/}
                        {/*        <th>See order</th>*/}
                        {/*    </tr>*/}
                        {/*    {ordersActive && ordersActive.map((order,value) => (*/}

                        {/*    <tr>*/}
                        {/*        <td  onClick={scrollSmoothHandler(value)}  style={{'border': '1px solid black'}}>{order.id}</td>*/}
                        {/*        <td   style={{'border': '1px solid black'}}>{order.address}</td>*/}
                        {/*        <td   style={{'border': '1px solid black'}}>{order.created_at}</td>*/}
                        {/*        <td  style={{'border': '1px solid black'}}>{order.price} RSD</td>*/}
                        {/*        <td  style={{'border': '1px solid black'}}> <p> {order.active ? <p style={{'color':'green'}}>ACTIVE</p> :  <p style={{'color':'green'}}>INACTIVE</p>}  </p> </td>*/}
                        {/*        <td   style={{'border': '1px solid black'}}>  <button style={{'float':'right'}} onClick={(e) => changeOrderStatus(e, order.id, value)}><p style={{'color':'blue'}}>CHANGE STATUS</p>  </button> </td>*/}
                        {/*        <td   style={{'border': '1px solid black'}}>*/}
                        {/*            <p>*/}

                        {/*                {order && order.food.map((f)=>*/}
                        {/*                    <div>*/}
                        {/*                        {console.log(f.name)}*/}
                        {/*                        {console.log(order)}*/}
                        {/*                        {f.name}*/}
                        {/*                    </div>*/}
                        {/*                )}*/}

                        {/*            </p>*/}
                        {/*            */}
                        {/*    </td>*/}

                        {/*    </tr>*/}
                        {/*        */}
                        {/*    ))}*/}
                        {/*    */}
                        {/*</table>*/}





{/*                        {ordersActive && ordersActive.map((order,value) => (*/}
{/*                            <div>*/}
{/*                                <div  className="p-12  border-b border-gray-200">*/}

{/*<p>{order.restaurant_id}</p>*/}
{/*                                    <p  ref={scrollRefs.current[value]}>Order ID:  {order.id}  <button style={{'float':'right'}} onClick={(e) => changeOrderStatus(e, order.id, value)}><p style={{'color':'blue'}}>CHANGE STATUS</p>  </button> </p>*/}
{/*                                    <p>Status: {order.active ? <p style={{'color':'green'}}>ACTIVE</p> :  <p style={{'color':'green'}}>INACTIVE</p>}  </p>*/}


{/*                                    <p>Address: {order.address}</p>*/}

{/*<hr/>*/}
{/*                                    {order && order.food.map((f)=>*/}
{/*                                 <div style={{'padding-top':'20px','padding-bottom':'20px'}}>*/}

{/*                                     <li>{f.name} <p style={{'float':'right'}}>{f.price}</p></li>*/}
{/*                                     /!*<p style={{'float':'right'}}>{f.price}</p>*!/*/}
{/*                                 </div>*/}
{/*                                    )}*/}

{/*                                    <hr/>*/}
{/*                                    <p style={{'float':'right','margin-top': '30px'}}>Total order price: {order.price}</p>*/}




{/*                                    <br/>*/}
{/*                                </div>*/}

{/*                                <div>*/}

{/*                                </div>*/}

{/*                            </div>*/}


{/*                        ))}*/}


                    </div>


                </div>

                    </div>
                </div>

        // </Authenticated>




    )

}
