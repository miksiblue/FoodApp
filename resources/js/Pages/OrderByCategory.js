import React, {useContext, useState} from 'react';
import {CartContext} from "@/Pages/CartContext";
import {Card, CardGroup} from "react-bootstrap";
import {MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardGroup} from 'mdb-react-ui-kit';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FcLike, FcLikePlaceholder} from "react-icons/fc";


export const OrderByCategory = (props) => {






    return (

        <div>

            {/*{props.category !== null ? <p style={{'paddingTop':'40px'}}>Filtered by  <b>{props.category}</b>  </p> : ''}*/}


            <Row xs={1} md={2} className="g-3">

                {props.filter && props.filter?.map(restaurant=>{

                    return (
                        <Col >
                            <Card>
                                <Card.Body

                                >

                                    <Card.Title
                                        style={{
                                            'border-radius': '20px',
                                            width: '100%',
                                            'height': '100%',
                                            'background-size': '100%',
                                            'background-position': '50%',
                                            'background-repeat': 'no-repeat',
                                            transition: 'background-size .15s ease-in-out',
                                            backgroundImage: `url(${restaurant.image})`
                                        }}
                                    >

                                        <h1 style={{
                                            'text-align': 'center',
                                            ' font-size': '28px',
                                            'line-height': '1.2',
                                            'font-weight': '400',
                                            'color': '#fff',
                                            margin: '0',
                                            padding: '0 8px',
                                            'text-shadow': '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
                                            top: '0',
                                            'z-index': '1',
                                            width: '100%',
                                            height: '150px',
                                            'display': 'flex',
                                            'flex-direction': 'column',
                                            'align-items': 'center',
                                            'justify-content': 'center',
                                            'style': 'bold',
                                            'font-size': '55px',
                                        }}>

                                            <Link to={`/restaurants/${restaurant.restaurant_id}`}
                                                  style={{'text-decoration': 'none', 'color': 'white'}}>
                                                <p style={{'text-decoration': 'none', 'font-family': 'serif'}}>{restaurant.name}</p>
                                            </Link>
                                        </h1>
                                    </Card.Title>
                                    {/*{restaurant.id}*/}
                                    {restaurant.name}
                                    {restaurant.avg}
                                    {console.log(restaurant)}

                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>

                    )
                })}

            </Row>
            <hr/>
        </div>


    )
}
