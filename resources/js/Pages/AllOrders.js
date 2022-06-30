import React, {useEffect, useState} from "react";
import {Hrana} from "@/Pages/Hrana";
import DeleteRestaurant from "@/Pages/DeleteRestaurant";
import Modal from "react-modal";
import {CartProvider} from "@/Pages/CartContext";
import {Cart} from "@/Pages/Cart";
import {RestaurantData} from "@/Pages/RestaurantData";
import Orders from "@/Pages/Orders";
import Pagination from "@/Pages/Pagination";




export const AllOrders= (props) => {



    const [orders, setOrders] = useState([]);
     const [loading,setLoading]=useState(false);
     const [currentPage,setCurrentPage]=useState(1);
     const [ordersPerPage]=useState(5);

    const [user,setUser]=useState('');

console.log('all orders ',orders)

    useEffect(() => {
        let isMounted = true;
        fetch('http://127.0.0.1:8000/findLoginUser/')
            // fetch('')

            .then(res => {
                return res.json()
            })
            .then(data => {
                if (isMounted)      setUser(data);
            })

        return () => { isMounted = false };

    }, []);

    useEffect(() => {
        let isMounted = true;
       // setLoading(true);
       //  axios.get('http://127.0.0.1:8000/api/v1/orders/',
       //  )
       //      // fetch('http://192.168.31.230/api/v1/restaurants/')
       //
       //      .then(res => {
       //          return res.json()
       //      })
       //      .then(data => {
       //          if (isMounted)      setOrders(data);
       //        //  setLoading(false);
       //      })
       //
       //  return () => { isMounted = false };

        const fetchPosts=async ()=> {
            setLoading(true);
            const res=await axios.get('http://127.0.0.1:8000/api/v1/orders/');

            setOrders(res.data);
            setLoading(false);
        }
        fetchPosts();//use effect runs when component mounts and when it is updates
        //because of then we put [] in the end


    }, []);


//get curent order

    const indexOfLastOrder=currentPage * ordersPerPage;
    const indexOfFirstOrder=indexOfLastOrder - ordersPerPage;
    const currentOrders=orders.slice(indexOfFirstOrder,indexOfLastOrder);

    const paginate=(pageNumber)=>setCurrentPage(pageNumber);


    return(


        <div>
            <div>

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">
                                 <p> All Orders</p>
                                <Pagination ordersPerPage={ordersPerPage} totalOrders={orders.length} paginate={paginate}></Pagination>
                <Orders ordersActive={currentOrders} loading={loading} ></Orders>


</div></div></div></div>

                {/*{orders && orders.map(order => (*/}
                {/*    <div>*/}
                {/*        <div>*/}
                {/*            /!*<p >{restaurant.id}</p>*!/*/}

                {/*            <p>Order ID: {order.id}</p>*/}
                {/*            <p>Address: {order.address}</p>*/}
                {/*            <p>Price: {order.price}</p>*/}
                {/*            <p>Status: {order.active}</p>*/}

                {/*            <p>Food: </p>*/}

                {/*            {order && order.food.map((a)=>*/}
                {/*                (*/}
                {/*                    <p>{a.name}</p>*/}
                {/*                ))}*/}

                {/*            <hr/>*/}
                {/*            <br/>*/}
                {/*        </div>*/}

                {/*        <div>*/}

                {/*        </div>*/}

                {/*    </div>*/}

                {/*))}*/}

            </div>

        </div>


    )

}
