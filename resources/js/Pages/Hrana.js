import React, {useContext, useState} from 'react';
import {CartContext} from "@/Pages/CartContext";
import {Card, CardGroup} from "react-bootstrap";
import {MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardGroup} from 'mdb-react-ui-kit';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row} from "react-bootstrap";


export const Hrana = (props) => {



    const [cart, setCart] = useContext(CartContext)
    // const clearCart = () => setCart([]);




    const addToCart = () => {




        const hrana = {name: props.name, price: props.price, id: props.id, restoranId: props.restoranId, image:props.image}

        setCart(trenutnoUkorpi => [...trenutnoUkorpi, hrana]);
    }


    return (

            <Card style={{ width: '50rem' }}>
                {/*<Card.Img style={{width:'70px'}} variant="top" src={props.image} />*/}
                <Card.Body>
                    <Card.Title><b>{props.name}</b></Card.Title>
                    <hr/>
                    <Card.Text>

                        <Card.Img style={{width:'350px',float:'right','border-radius':'20px','height':'150px'}} variant="top" src={'http://127.0.0.1:8000/'+ props.image} />
                        <div style={{display: "flex" ,flexDirection: "row"}}>
                        {props.food?.map((i)=>(

                          <p>  {i.ingredient}, </p>

                            )

                        )}
                    </div>

                        {/*{props.sale !== null ?  <p style={{ 'text-decoration-line': 'line-through'}}><b>{props.price} RSD </b></p> : <h1><b>{props.price} RSD </b></h1> }*/}

                        {/*<h1>{props.sale} RSD</h1>*/}
                        <p style={{ 'text-decoration-line': 'line-through'}}><b>{props.pravaCena}</b></p>
                        <br/>
                        <h1><b>{props.price} RSD </b></h1>
                    </Card.Text>
                    <Button onClick={addToCart}  variant="success">+</Button>
                </Card.Body>
            </Card>

    )
}
