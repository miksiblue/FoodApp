import React, {useContext, useEffect, useState} from 'react';

import "react-alice-carousel/lib/alice-carousel.css";
import {Card, Col, Row} from "react-bootstrap";
import {FcLike} from "react-icons/fc";
import {AiOutlineStar} from "react-icons/ai";




export default function TopRated(props) {


    const [score,setScore]=useState('');

    useEffect(()=>{
        fetch(route('orderScore'))
            .then(res=>{
                return res.json()
            })
            .then(data=>{
                setScore(data);
            })

    },[]);

    console.log(score)
    return (
    <div style= {{'padding-top':'50px'}}>

        <Row xs={1} md={1} className="g-3">

            {score && score.map((restaurant,idx) => {
                return (
                    <Col key={idx}>
                        <Card >
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
                                        backgroundImage :`url(${restaurant.image})`}}

                                >

                                    <h1    style={{
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
                                        'style':'bold',
                                        'font-size': '55px',
                                    }}
                                    >{restaurant.name}

                                    </h1>
                                </Card.Title>

                                {/*<p> <AiOutlineStar></AiOutlineStar>   {parseFloat(restaurant.avg).toFixed(2)}</p>*/}
                                <Card.Text>
<div style={{'display': 'flex'}}>
<AiOutlineStar></AiOutlineStar>
                                    {parseFloat(restaurant.avg).toFixed(2)}
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
