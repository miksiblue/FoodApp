
import React ,{useContext, useState, useRef, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {CartProvider} from "@/Pages/CartContext";
import {RestaurantData} from "@/Pages/RestaurantData";
import {Card, Col, Row} from "react-bootstrap";
import {Hrana} from "@/Pages/Hrana";
import {Cart} from "@/Pages/Cart";
import {FiShoppingCart} from "react-icons/fi";
import {CartLenght} from "@/Pages/CartLenght";
import { BsArrowLeftShort } from "react-icons/bs";

const ShowRestaurant = (props) => {


    const {id} = useParams();
    const [restaurant, setRestaurant] = useState("");
    const [ocena, setOcena] = useState("");
    const [state1, setState1] = useState('hrana');
    const duplicateCheck = [];
    const duplicateCheck1 = [];


    const scrollRefs = useRef([]);

    console.log('duzina', restaurant.food?.length)

    console.log('duplikati 1', duplicateCheck.length)
    console.log('kategorije', restaurant.food?.map(f => f.categories.filter((val, id, array) => array.indexOf(val) !== id).length))
    console.log('trenutno', restaurant.food?.map(f => f.categories).length)

    // names.filter((val,id,array) => array.indexOf(val) == id)

    scrollRefs.current = [...Array(restaurant.food?.length).keys()].map(
        (_, i) => scrollRefs.current[i] ?? React.createRef()
    );

    const scrollSmoothHandler = (index) => () => {

        scrollRefs.current[index].current.scrollIntoView({behavior: "smooth"});
    };


    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/v1/ocena/' + id)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setOcena(data);
            })

    }, []);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/v1/restaurants/' + id)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setRestaurant(data);
            })
        // fetch('http://192.168.31.230/api/v1/foods')
        //     .then(res=>{
        //         return res.json()
        //     })
        //     .then(data=>{
        //         setFood(data);
        //     })
    }, []);


    return (

        <CartProvider>


            <RestaurantData ocena={ocena} idr={restaurant.id} nameRestoran={restaurant.name} phone={restaurant.phone}
                            location={restaurant.location} email={restaurant.email}
                            workingHours={restaurant.working_hours}></RestaurantData>
            {/*<p onClick={()=>setState1('korpa')}>Korpa</p>*/}

            {state1 === 'hrana' ?
                <div onClick={() => setState1('korpa')}
                     style={{display: "flex", flexDirection: "row", 'margin-top': '20px', 'margin-left': '30px'}}>
                    {/*<FiShoppingCart size={60} />*/}
                    <div style={{
                        'position': 'fixed',
                        'width': '11%',
                        'background': '#198754',
                        'z-index': '2',
                        'height': '100%',
                        'margin-top': '90px',
                        'border-radius': '25px',
                        'margin-left': '1170px',


                    }}><b style={{
                        'margin-left': '35px',
                        'font-size': '20px',
                        'color': 'white',
                    }}>View Order </b> <b style={{
                        'border-radius': '50%',
                        'width': '36px',
                        'height': '36px',
                        'padding': '8px',
                        'background': '#fff',
                        'border': '2px solid #666',
                        'color': '#666',
                        'text-align': 'center',

                    }}><CartLenght></CartLenght></b></div>
                </div>
                :
                <div onClick={() => setState1('hrana')} style={{display: "flex", flexDirection: "row"}}>
                    <BsArrowLeftShort size={60}/>
                </div>

            }


            {state1 === 'hrana' ?

                <div style={{'padding-top': '50px', 'display': 'flex'}}>


                    <div style={{
                        'width': '25%',
                        'padding-right': '50px',
                        'padding-left': '60px',
                        'text-align': 'center'
                    }}>

                        {/*{restaurant && restaurant.categories.map(cat=>(*/}
                        {/*    <div>*/}
                        {/*    <p>    {cat.category} </p>*/}
                        {/*        <br/>*/}

                        {/*    </div>*/}

                        {/*))}*/}
                        {/*</div>*/}


                        {/*//Kategorije*/}
                        {/*                                {f.categories && f.categories.map((data, index) => {*/}
                        {/*                                    if (duplicateCheck.includes(data.id))*/}
                        {/*                                        return null;*/}
                        {/*                                    duplicateCheck.push(data.id);*/}
                        {/*                                    return(*/}
                        {/*                                        <div>{data.category}*/}
                        {/*                                            {data.food.map((fo)=>(*/}
                        {/*                                                <div>{fo.name}</div>*/}
                        {/*                                            ))}*/}
                        {/*                                        </div>*/}

                        {/*                                    );*/}
                        {/*                                }).filter((e) => (e))*/}
                        {/*                                }*/}
                        {restaurant && restaurant.food?.map((f, z) => (<div>
                                {f.categories && f.categories.map((d, value) => {
                                    if (duplicateCheck.includes(d.id))
                                        return null;
                                    duplicateCheck.push(d.id);
                                    return (
                                        <div style={{
                                            'font-family': 'serif',
                                            'font-style': 'italic',
                                            'font-size': '17px'
                                        }}>
                                            <p onClick={scrollSmoothHandler(d.id)}>
                                                <b>  {d.category} </b>
                                                {console.log('d 1 id', d.id)}
                                            </p>
                                            <br/>


                                        </div>

                                    )
                                })}

                            </div>)
                        )}
                    </div>

                    <div style={{'border-left': '6px solid green', 'height': 'auto'}}></div>

                    <Row xs={1} md={1} className="g-3">
                        {restaurant && restaurant.food?.map((f, z) => (<div>
                                {f.categories && f.categories.map((d, value) => {
                                    if (duplicateCheck1.includes(d.id))
                                        return null;
                                    duplicateCheck1.push(d.id);
                                    return (

                                        <div>


                                            {d.food.map((fo) => (
                                                <Col key={z} ref={scrollRefs.current[d.id]}>

                                                    {fo.sale === null ?
                                                        <Hrana image={fo.image} name={fo.name} price={fo.price} id={fo.id}
                                                               restoranId={restaurant.id}
                                                               food={restaurant.ingredients}></Hrana>
                                                        :
                                                        <Hrana pravaCena={fo.price} image={fo.image} name={fo.name}
                                                               price={fo.sale} id={fo.id} restoranId={restaurant.id}
                                                               food={restaurant.ingredients}></Hrana>
                                                    }

                                                    {/*<Hrana sale={f.sale} image={f.image} name={f.name} price={f.price} id={f.id} restoranId={restaurant.id} food={restaurant.ingredients}></Hrana>*/}

                                                    {/*<Hrana image={f.image} name={f.name} price={f.price} id={f.id} restoranId={modalData.id} ingredients={f.ingredients}></Hrana>*/}
                                                </Col>
                                            ))}

                                        </div>

                                    )
                                })}

                            </div>)
                        )}
                    </Row>
                </div>
                : ''}

            {/*<p onClick={()=>setState1('korpa')}>Korpa</p>*/}
            {state1 === 'korpa' ? <Cart></Cart> : ''}
        </CartProvider>


    );
}

export default ShowRestaurant;
