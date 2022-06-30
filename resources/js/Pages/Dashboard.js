import React, {useContext,useState} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import {ExampleContext} from "@/Pages/FoodList";
import FavoriteRestaurants from "@/Pages/FavoriteRestaurants";
import RestaurantProba from "@/Pages/RestaurantProba";
import RandomFood from "@/Pages/RandomFood";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './img/1.jpg';
import image2 from './img/2.jpg';
import image3 from './img/13.jpg';
import image4 from './img/22.jpg';
import NavLink from "@/Components/NavLink";
import {ProbaProvider} from "@/Pages/ProbaContext";
import {Proba} from "@/Pages/Proba";
import ShowRestaurant from "@/Pages/ShowRestaurant";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Ruta from "@/Pages/Ruta";
import TopRated from "@/Pages/TopRated";
import Promotions from "@/Pages/Promotions";
import Korpa from "@/Pages/Korpa";
import {CartProvider} from "@/Pages/CartContext";




export default function Dashboard(props) {

     const [state,setState1]=useState('dashboard');
    const [s,setS]=useState('res');

    const valueFromContext = useContext(ExampleContext);
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}

        >

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8" style={{'margin-top':'-100px'}}>
                    {/*<div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">*/}
                    {/*    <div className="p-6 bg-white border-b border-gray-200">All Restaurants!</div>*/}
                    {/*</div>*/}



                    {/*<AliceCarousel style={{height:'50%'}} autoPlay autoPlayInterval="2500">*/}
                    {/*    <img src={image1} style={{ width: '100%',*/}
                    {/*        height: '500px',*/}
                    {/*        'object-fit': 'cover'}} alt=""/>*/}
                    {/*    <img src={image2}  style={{ width: '100%',*/}
                    {/*        height: '500px',*/}
                    {/*        'object-fit': 'cover'}} alt=""/>*/}
                    {/*    <img src={image3}  style={{ width: '100%',*/}
                    {/*        height: '500px',*/}
                    {/*        'object-fit': 'cover'}} alt=""/>*/}
                    {/*    <img src={image4}  style={{ width: '100%',*/}
                    {/*        height: '400px',*/}
                    {/*        'object-fit': 'cover'}} alt=""/>*/}
                    {/*</AliceCarousel>*/}

                    {/*<div style={{  'display': 'flex',*/}
                    {/*    'flex-direction': 'row',*/}
                    {/*    'justify-content': 'center'}}>*/}

                    {/*    <p onClick={() => setState1('restaurants')} style={{'padding-right':'100px'}}> <b>All Restaurants</b></p>*/}
                    {/*    <p  style={{'padding-right':'100px'}}><b>Promotions</b></p>*/}
                    {/*    <p style={{'padding-right':'100px'}}><b>Top Rated</b></p>*/}
                    {/*    <p onClick={() => setState1('favorites')} style={{'padding-right':'100px'}}><b>Favorite Restaurants</b></p>*/}
                    {/*    <p onClick={() => setState1('random')} style={{'padding-right':'100px'}}><b>Random Food</b></p>*/}
                    {/*</div>*/}

                    {/*<hr/>*/}
                    {/*{state === 'favorites' ? <FavoriteRestaurants setState1={setState1} state={state}></FavoriteRestaurants> : ''}*/}
                    {/*/!*{state === 'restaurants' ? <RestaurantProba  setState1={setState1} state={state}></RestaurantProba> : ''}*!/*/}
                    {/*{state === 'random' ?  <RandomFood></RandomFood> : ''}*/}



                    <BrowserRouter>
                        <Ruta></Ruta>
                        {/*<Authenticated></Authenticated>*/}
                        {/*<RestaurantProba></RestaurantProba>*/}
                        {/*<Link to={`/restaurants/${restaurant.id}`} ><li><a onClick={() => props.setState1('aaa')}> Show Restaurant </a></li></Link>*/}


                        <Routes>
                            <Route exact  path="/dashboard/"  element={<RestaurantProba  />}>
                            </Route>
                        </Routes>

                        <Routes>
                            <Route path="/restaurants/:id" element={<ShowRestaurant />}>
                            </Route>
                        </Routes>

                        <Routes>
                            <Route path="/random/" element={<RandomFood />
                            }>
                            </Route>
                        </Routes>


                        <Routes>
                            <Route path="/favorite/" element={<FavoriteRestaurants />}>
                            </Route>
                        </Routes>

                        <Routes>
                            <Route path="/topRated/" element={<TopRated />}>
                            </Route>
                        </Routes>


                        <Routes>
                            <Route path="/promotions/" element={<Promotions />}>
                            </Route>
                        </Routes>

                        <CartProvider>
                        <Routes>
                            <Route path="/korpa/" element={<Korpa />}>
                            </Route>
                        </Routes>
                            </CartProvider>




                    </BrowserRouter>



                </div>



            </div>

        </Authenticated>
    );
}
