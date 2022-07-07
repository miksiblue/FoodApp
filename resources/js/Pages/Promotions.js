import React, {useContext, useState, useRef, useEffect} from "react";
import {useForm} from "@inertiajs/inertia-react";
import Button from "@/Components/Button";
import {Card, Col, Row} from "react-bootstrap";
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import set from "alpinejs";
import {Link} from "react-router-dom";

export default function Promotions(props) {

const [hrana,setHrana]=useState('');

    useEffect(() => {
        let isMounted = true;
        fetch(route('promotions'))
            // fetch('http://192.168.31.230/api/v1/restaurants/')

            .then(res => {
                return res.json()
            })
            .then(data => {
                if (isMounted) setHrana(data);
            })

        return () => {
            isMounted = false
        };
    }, []);


    console.log(hrana);

    return (
        <div style= {{'padding-top':'50px'}}>

            <Row xs={1} md={3} className="g-3">

                {hrana.length && hrana.map((h, idx) => {

                    return (
                        <Col key={idx}>
                            <Card style={{
                                'font-family': 'serif',
                                'font-style': 'italic',
                                'font-size': '17px'
                            }}>
                                <Card.Body

                                >
                                   <h1 style={{'font-size':'20px'}}> <b>{h.restaurant.name}</b>  </h1>
                                    <Card.Title
                                        style={{
                                            'border-radius': '20px',
                                            width: '100%',
                                            'height': '100%',
                                            'background-size': '100%',
                                            'background-position': '50%',
                                            'background-repeat': 'no-repeat',
                                            transition: 'background-size .15s ease-in-out',
                                            backgroundImage: `url(${h.image})`
                                        }} >

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


                                            <Link to={`/restaurants/${h.restaurant.id}`}
                                                  style={{'text-decoration': 'none', 'color': 'white'}}>
                                                <p style={{'text-decoration': 'none', 'font-family': 'serif'}}>{h.name}</p>
                                            </Link>

                                        </h1>
                                    </Card.Title>

                                    <Card.Text>

                                        <p style={{ 'text-decoration-line': 'line-through'}}>    {h.price} </p>

                                        <div style={{'display':'flex'}}>
                                     <p>   {h.sale} </p>


                                    {/*    Let us find the percentage of 30 in 45.

                                    Dividing the part by whole and multiplying the result with 100 gives 30/45 × 100 = 66.67%.

                                    So, 30 is 66.67% of 45.*/}
<br/>
                                    <p style={{'padding-left':'250px',


                                    }}>   <b style={{
                                        // top: 10px;
                                        // left: 0px;
                                        'color': 'rgb(255, 255, 255)',
                                        'background': 'red',
                                        'padding': '3px 10px',
                                        'font-weight': '700',
                                        'font-size':'15px'
                                    }}


                                    > {100-((h.sale/h.price)*100)}% OFF  </b>  </p>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>

        </div>
    );
}
