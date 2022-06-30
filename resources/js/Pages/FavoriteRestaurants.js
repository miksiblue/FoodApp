import React, {useContext, useState, useRef, useEffect} from "react";
import {useForm} from "@inertiajs/inertia-react";
import Button from "@/Components/Button";
import {Card, Col, Row} from "react-bootstrap";
import {FcLike} from "react-icons/fc";
import set from "alpinejs";

export default function FavoriteRestaurants(props) {


    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalData, setModalData] = useState('');

    const [favoriteRestaurant,setFavoriteRestaurant]=useState('');


    const {data, setData,post} = useForm({

        restaurant_id:'',


    });



    const deleteFavoriteRestaurant=(value)=>{
         data.restaurant_id =value;
        post(route('deleteFavoriteRestaurant'))

        let isMounted = true;
        fetch(route('favoriteRestaurants'))
            // fetch('http://192.168.31.230/api/v1/restaurants/')

            .then(res => {

                return res.json()
            })
            .then(data => {
                if (isMounted)      setFavoriteRestaurant(data);

            })

        return () => { isMounted = false };

    }

    useEffect(() => {
        let isMounted = true;
        fetch(route('favoriteRestaurants'))
            // fetch('http://192.168.31.230/api/v1/restaurants/')

            .then(res => {

                return res.json()
            })
            .then(data => {
                if (isMounted)      setFavoriteRestaurant(data);

            })

        return () => { isMounted = false };


    }, []);



    return (
        <div style= {{'padding-top':'50px'}}>

            {console.log(favoriteRestaurant)}

            {/*{favoriteRestaurant && favoriteRestaurant.map(restaurant=>(*/}
            {/*    <div>*/}
            {/*        {restaurant.name}*/}
            {/*    </div>*/}
            {/*))}*/}

            <Row xs={1} md={1} className="g-3">

                {favoriteRestaurant && favoriteRestaurant.map((restaurant,idx) => {
                    {console.log(favoriteRestaurant)}
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

                                        onClick={() => {
                                            setModalData(restaurant);
                                            setModalIsOpen(true)
                                        }}>

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

                                    <Card.Text>
                                        {restaurant && restaurant.categories.slice(0,6).map((c)=>(
                                            <p style={{
                                                'height': '30px',
                                                'width': '80px',
                                                'background-color': '#003312',
                                                'border-radius': '30%',
                                                'display': 'inline-block',
                                                'margin-left': '10px',
                                                'box-shadow': '0 2px 8px rgba(0, 0, 0, 0.25)',
                                                'color':'white',
                                                'text-align':'center'
                                            }}>   {c.category}</p>
                                        ))}
                                        {/*<img  style={{'float':'right',"width":"35px"}}   src="https://o.remove.bg/downloads/2d1fa20e-8b15-42ef-b16a-db433da4932f/590-5903480_red-heart-with-ochre-outline-clip-art-love-removebg-preview.png" />*/}
                                        <FcLike onClick={()=>deleteFavoriteRestaurant(restaurant.id)}  style={{'float':'right',"width":"35px"}} size={40}  />




                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
<hr/>


        </div>
    );
}
