import React, {useContext, useEffect, useState} from "react";
import {CartContext, CartProvider} from "@/Pages/CartContext";
import {Button, Card} from "react-bootstrap";

import { BiCurrentLocation } from "react-icons/bi";
import {CartLenght} from "@/Pages/CartLenght";
import Modal from "react-modal";
import classes1 from "@/UI/Modal.module.css";
import {Cart} from "@/Pages/Cart";

import { IoMailOutline } from "react-icons/io5";
import { HiPhone } from "react-icons/hi";
import { AiOutlineHourglass } from "react-icons/ai";

import { FiShoppingCart } from "react-icons/fi";
import {useForm} from "@inertiajs/inertia-react";
import {Link} from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";


export const RestaurantData = (props) => {

    const [cart, setCart] = useContext(CartContext)


    // const clearCart = () => setCart([]);
    const addToCart = () => {
        const restoran = {name: props.idr}
        setCart(trenutnoUkorpi => [...trenutnoUkorpi, restoran]);
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalData, setModalData] = useState('');

    const [modalIsOpen1, setModalIsOpen1] = useState(false);
    const [modalData1, setModalData1] = useState('');

    const [ocena,setOcena]=useState("");

    const {data, setData, post} = useForm({

    });

    const addScore = () => {
data.user_id=3;
data.restaurant_id=props.idr;
            post(route('storeScore'));

    }
console.log(data.score)





    return (
<div>




    <div>
        <Card style={{width: '100%'}}>

            <Card.Body style={{

                width: '100%',
                'height': '100%',
                'background-size': '100%',
                'background-position': '50%',
                'background-repeat': 'no-repeat',
                transition: 'background-size .15s ease-in-out'
              }}>
                <Card.Title >
                    <div style={{direction: "row" }}>
                    <h1 style={{'padding-left': '30px'}}><b>{props.nameRestoran}</b></h1>

                    </div>
                </Card.Title>
                <hr/>
                <Card.Text>
                    <div>
                        <div style={{display: "flex" ,flexDirection: "row",'margin-left': '300px'}}>
                            <BiCurrentLocation />
                            <p style={{'margin-left':'3px'}}>  {props.location}</p>



                            <IoMailOutline style={{'margin-left':'30px'}} />
                            <p style={{'padding-left':'3px'}}>  {props.email}</p>


                            <HiPhone style={{'margin-left':'30px'}} />
                            <p style={{'padding-left':'3px'}}> {props.phone}</p>

                            <AiOutlineStar style={{'margin-left':'30px'}} />
<p style={{'padding-left':'3px'}} onClick={()=>setModalIsOpen(true)}>Score : {parseFloat(props.ocena).toFixed(2)}</p>



                            <a   style={{'margin-left':'30px',
                                'text-decoration': 'none',
                                'color': 'black'
                            }} href={`/restaurantComments/${props.idr}`}> Comments </a>
                            <Modal className={classes1.score}   isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>

                                Rate Restaurant
                            <form onSubmit={addScore}>

                                <button className="btn btn-primary btn-sm" type="submint"> Rate</button>
<br/>


                                <input type="radio"  onClick={()=>data.score=1} name="score" /> 1
                                <input type="radio"  onClick={()=>data.score=2}  name="score" /> 2
                                <input type="radio" onClick={()=>data.score=3}  name="score" /> 3
                                <input type="radio" onClick={()=>data.score=4}  name="score" /> 4
                                <input type="radio" onClick={()=>data.score=5}  name="score" /> 5



                            </form>
                            </Modal>

         </div>
                    </div>


                    <Modal style={{'z-index': '99999999999'}} className={classes1.modal}   isOpen={modalIsOpen1} onRequestClose={() => setModalIsOpen1(false)}>
                        <div>

                            <Cart></Cart>

                        </div>
                    </Modal>
                </Card.Text>



            </Card.Body>
        </Card>


      andjela
    </div>
</div>
    )
}
