import React, {useContext, useEffect, useState, useRef} from "react";
import {CartContext} from "@/Pages/CartContext";
import {useForm} from "@inertiajs/inertia-react";
import Input from "@/Components/Input";
import Button from "@/Components/Button";
import { BsTrash } from "react-icons/bs";
import {Card} from "react-bootstrap";


export const Cart = (props) => {

    const [cart, setCart] = useContext(CartContext);

    // const [address,setAddres]=useState('adresa 1');
    // const [user_id,setUserId]=useState(1);
    // const [food,setFood]=useState([1]);
    //
    // const formData = new FormData()
    //
    // formData.append('address', address)
    // formData.append('user_id', user_id)
    // formData.append('food', food)
    // formData.append('id', id)

    const {data, setData, post} = useForm({

        restaurant_id:'',
        food: []
    });




    const removeFromCart = value => {

        setCart(cart => cart.filter((_, i) => i !== value));


    }
    const totalPrice = cart.reduce((acc, curr) =>


         acc + curr.price, 0



    );

    const clearCart = () => setCart([]);


    const addOrder = () => {
          // window.location.reload(false);
        data.address = 'drvarska 1';
        data.restaurant_id=1;
        cart.map((k, v) => {
            data.food[v] = k.id;
            data.restaurant_id=k.restoranId;

        })
        data.user_id = 1;

        if (data.price = 0) {
            console.log('greska')
        } else {
            post(route('orders'));
        }
         window.location.reload(false);
    }

    return (
        <div  style={{'margin-left':'10%','margin-right':'10%'}}>

            <h1 style={{'float':'right','margin-left':'10%','margin-right':'10%'}} >Items in cart : {cart.length}</h1>
<br/>
            <h1  >
                <p style={{'padding-bottom':'30px','padding-top':'30px'}}> </p>
                {cart && cart.map(({restoranId,name, price, id,image}, value) => (
                <div className="container" style={{'backgorund':'white'}}>
                    <div className="row">
                        <div  className="col-sm-3">
                            <img style={{width:'350px',float:'right','border-radius':'20px','height':'150px'}} src={'http://127.0.0.1:8000/'+ image} />
                        </div>
                        <div style={{}} className="col-sm-3">

                            <p style={{'padding-left':'50px'}}>{name}</p>
                            {/*<p>Restorannnnn:{restoranId}</p>*/}
                            {/*{sale !== null ? <p style={{'color':'white'}}>{sale}</p> : <p style={{'color':'white'}}> {price}</p>  }*/}
                            <p style={{'padding-left':'50px','font-size':'20px'}}>{price} RSD</p>

                        </div>
                        <div className="col-sm-3">
                            <button style={{'padding-left':'450px'}} onClick={() => removeFromCart(value) }><BsTrash size={20} /></button>
                        </div>
                        <hr/>
                    </div>
                </div>
            ))}

            </h1>

            <div style={{'float':'right'}}>


            <h1 style={{'float':'right'}} > {totalPrice} RSD Total Price</h1>
<br/>
            <button style={{'width':'100%'}} className='btn btn-success' variant="success" onClick={addOrder} >Check Out</button>
            <br/>
            <button variant="success" onClick={clearCart}>Remove all from cart</button>
            <br/>
</div>

            {/*<hr/>*/}
        </div>

    )
}
