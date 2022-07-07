import React, {useContext, useState, useRef, useEffect} from "react";

import {AiOutlineStar} from "react-icons/ai";
import {Card, Col, Row,Button} from "react-bootstrap";



export default function RandomFood  (props)  {


    const [randomFood,setRandomFood]=useState('');

    console.log(randomFood)

    const random = () => {
        let isMounted = true;
        fetch('http://127.0.0.1:8000/api/v1/randomFood/')

            .then(res => {
                return res.json()
            })
            .then(data => {
                if (isMounted)      setRandomFood(data);
            })

        return () => { isMounted = false };
    }

    useEffect(() => {

        let isMounted = true;
        fetch('http://127.0.0.1:8000/api/v1/randomFood/')

            .then(res => {
                return res.json()
            })
            .then(data => {
                if (isMounted)      setRandomFood(data);
            })

        return () => { isMounted = false };


    }, []);
console.log(randomFood);
    return (

<div>{randomFood && randomFood.map((r)=>(
    <div style= {{'padding-top':'50px' ,

        'font-family': 'serif',
        'font-size': '17px'}}>

        <Button variant="outline-success" style={{
            'margin-left': '15%',
            'margin-bottom': '2%'
        }} onClick={random}>What to eat?</Button>




<div style={{    'display': 'flex'}}>

    <div style={{'width':'40%'}}>
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
                        backgroundImage: `url(${r.image})`
                    }}
                >

                    <h1
                        style={{
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
                        }}

                    >{r.name}

                    </h1>
                </Card.Title>


                <Card.Text>
                    <div style={{'display': 'flex'}}>

                        Price :
                        {r.sale === null ?  <p style={{ 'text-decoration-line': 'none'}}><b>{r.price}</b></p>  :<p style={{ 'text-decoration-line': 'line-through'}}><b>{r.price}</b></p>}
<br/>
                        <h1>{r.sale}</h1>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
    <div style={{'width':'50%','padding-left':'5%'}}>
        What to eat for dinner? It's a question that runs through everyone’s mind almost daily, usually followed by the frustration of not knowing what the answer is. Do you need something quick, are you hoping to try something new and unique, are you looking for tasty air fryer recipes, or do you want something that doesn’t require much thought, like sheet pan meals? Whether you are looking for family friendly recipes, quick and easy dinner ideas, or no-prep, heat and serve meals, we have multiple options that answer that tiresome question of what to eat tonight.
    </div>
</div>

    </div>
    ))}</div>

    )
}
