import React from "react";


const Orders = ({ordersActive,loading,setOrdersActive}) => {


    if(loading){
        return <h2>Loading...</h2>
    }


    const changeOrderStatus = (e, id, value) => {
        // e.preventDefault();
        setOrdersActive(ordersActive => ordersActive.filter((_, i) => i !== value));

        axios.put(`http://127.0.0.1:8000/api/v1/orders/${id}`)



    }


    return (

        // <div>
        //     <ul className="list-group mb-4">
        //         {orders.map(order=>(
        //             <li key={order.id} className="list-group-item">
        //                 {order.address}
        //             </li>
        //
        //         ))}
        //     </ul>
        // </div>



    <table style={{'width':'100%'}} className='styled-table'>

        <thead>



        <tr>
            <th style={{'width':'75px'}}>ID</th>
            <th>Address </th>
            <th>Created at</th>
            <th>Order price</th>
            <th>Status</th>
            <th>Change status</th>
            <th>Ordered meals</th>
            {/*<th>Ordered meals</th>*/}
        </tr>
        </thead>
        {ordersActive && ordersActive.map((order,value) => (

<tbody>
            <tr>
                <td
                    // style={{'border': '1px solid black'}}
                >
                    {order.id}
                </td>
                <td
                    // style={{'border': '1px solid black'}}

                >{order.address}</td>
                <td
                    // style={{'border': '1px solid black'}}
                >{order.created_at}</td>
                <td
                    // style={{'border': '1px solid black'}}
                >{order.price} RSD</td>
                <td
                    // style={{'border': '1px solid black'}}
                > <p> {order.active ? <p style={{'color':'green'}}>ACTIVE</p> :  <p style={{'color':'green'}}>INACTIVE</p>}  </p> </td>
                <td
                    // style={{'border': '1px solid black'}}
                >

                    <button style={{'float':'right'}} onClick={(e) => changeOrderStatus(e, order.id, value)}><p style={{'color':'blue'}}>CHANGE STATUS</p>  </button>
                    </td>
                <td
                    // style={{'border': '1px solid black'}}
                >
                    <p>

                        {order && order.food.map((f)=>
                            <div>
                                {console.log(f.name)}
                                {console.log(order)}
                                {f.name}
                            </div>
                        )}

                    </p>





                </td>

            </tr>

</tbody>
        ))}


    </table>


)


}

export default Orders
