import React, {createContext, useRef} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import NavLink from "@/Components/NavLink";
import {useEffect, useState} from "react";
import RestaurantList from "@/Pages/RestaurantList";
import Modal from "react-modal";
import ReactRedux from 'react-redux';
import { createStore } from 'redux';
import DeleteRestaurant from "@/Pages/DeleteRestaurant";
import  { useContext } from 'react';
import Display from "@/Pages/Display";
import {ListaHrane} from "@/Pages/ListaHrane";
import {CartContext, CartProvider} from "@/Pages/CartContext";
import {Cart} from "@/Pages/Cart";
import {ProbaProvider} from "@/Pages/ProbaContext";
import {Proba} from "@/Pages/Proba";


export const ExampleContext=createContext();

export default function FoodList(props) {


    const [user,setUser]=useState();
// const menadzer=useState('menadzer')
const broj=8;
    useEffect(() => {
        let isMounted = true;
        fetch(route('findUser'))
            // fetch('http://192.168.31.230/api/v1/restaurants/')

            .then(res => {
                return res.json()
            })
            .then(data => {
                if (isMounted)      setUser(data);
            })

        return () => { isMounted = false };
    }, []);


    console.log(user)


    // const [name,setCount] = useState(0);
    // const [ phone,setCount2] = useState(0);
    // const [ address,setAddress] = useState(0);
    // const [ food_id,setFoodId] = useState(0);
    // const [itemCount, setItemCount] = React.useState(0);

    // const count = useRef(0);

    // useEffect(() => {
    //     count.current = count.current + 1;
    // });


    // const incrementCount = () => {
    //     // Update state with incremented value
    //     // setCount(count + 1);
    //     setCount2(count2 + 2);
    //     // setCount1(count1 + 2);
    // };


    //
    // const NumberContext = React.createContext();
    // // const storeA = createStore(reducerA);

    const [restaurants, setRestaurants] = useState('');


    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalData, setModalData] = useState('');


    useEffect(() => {
        let isMounted = true;
          fetch(route('allRestaurants'))
          // fetch('http://192.168.31.230/api/v1/restaurants/')
        // fetch('http://192.168.31.230/api/v1/restaurants/')

            .then(res => {
                return res.json()
            })
            .then(data => {
                if (isMounted)      setRestaurants(data);
            })

        return () => { isMounted = false };
    }, []);

    //
    // if (user===menadzer){
    //
    // }


    return (

        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">FoodList</h2>}
        >
            <Head title="Dashboard" />



                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">All Restaurants!</div>
                        </div>

                        {/*{user}*/}

                        <ExampleContext.Provider value={restaurants.length}>
                            <ListaHrane></ListaHrane>
                        </ExampleContext.Provider>

                        <></>



                        <CartProvider>
                            {/*{user === broj*/}

                            {/*    ?*/}
                            <Cart></Cart>
                                :
                                {/*<p>proba</p>}*/}
                        </CartProvider>



                        {/*      {user === broj
                        ?
                    <p>moze</p>
                        :
                      <p>ne moze</p>
                    }*/}

                        {/*<CartProvider>*/}
                        {/*    <Proba></Proba>*/}
                        {/*</CartProvider>*/}

                        <div>

                            {/*{restaurants.name}*/}
                            {restaurants && restaurants.map((restaurant) => (
                                <div>
                                    <div>

                                        {/*<p >{restaurant.id}</p>*/}
                                        <p className="bg-white overflow-hidden shadow-sm sm:rounded-lg"
                                           onClick={() => {
                                               setModalData(restaurant);
                                               setModalIsOpen(true)
                                           }}
                                        >{restaurant.name}</p>
<br/>
                                    </div>
                                    <Modal  isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>

                                        <p>{modalData.id}</p>
                                        <p>Name: {modalData.name}</p>
                                        <p>Location: {modalData.location}</p>
                                        <p>Email: {modalData.email}</p>
                                        <p>Working hours: {modalData.working_hours}</p>
                                        {/*<img src={"http://192.168.31.230/"+restaurant.image } alt="Snow"/>*/}
                                        {/*<p>Food: {modalData.food.map((f)=>(<p>{f.name})</p>  ))}</p>*/}

                                        <hr/>

                                        {modalData.food?.map((f)=>(
                                            <div>
                                            <div>
                                            {/*<p>    {f.name} </p>*/}

                                                    {/*<button onClick={() => setCount(f.name)}>{f.name}</button>*/}
                                                 <p>cena : {f.price}</p><br/>
                                                 <p>name : {f.name}</p><br/>

                                                    {/*<button onClick={() => setFoodId(f.id)}>+</button><br/>*/}
                                                    {/*{count}*/}



                                                    <div>
                                                    {/*    <button*/}
                                                    {/*    onClick={() => {*/}
                                                    {/*        setItemCount(Math.max(itemCount - 1, 0));*/}
                                                    {/*    }}*/}
                                                    {/*>-*/}
                                                    {/*    <p>{itemCount}</p>*/}

                                                    {/*</button>*/}
                                                    </div>




                                            {/*<button*/}
                                            {/*            onClick={() => {*/}
                                            {/*                setItemCount(itemCount + 1);*/}
                                            {/*            }}*/}
                                            {/*        >*/}
                                            {/*           +*/}

                                            {/*        </button>*/}



                                                {/*<NumberContext2.Provider value={f.id}>*/}
                                                {/*    <div>*/}
                                                {/*        <Display NumberContext2={NumberContext2} />*/}

                                                {/*    </div>*/}
                                                {/*</NumberContext2.Provider>*/}
                                            </div>


                                            </div>
                                        ))}
                                        <div>
                                            <hr></hr>
                                            {/*<NumberContext.Provider value={{name,phone,count,setCount,address,food_id}}>*/}
                                            {/*    <div>*/}
                                            {/*        /!*Name from Parent {name}*!/*/}
                                            {/*        <Display NumberContext={NumberContext}  />*/}
                                            {/*    </div>*/}
                                            {/*</NumberContext.Provider>*/}


                                        </div>

                                        {/*<FoodList food={food}></FoodList>*/}

                                        <hr/>

                                        <div>
                                            <button className='btn btn-success me-2' onClick={() => setModalIsOpen(false)}>Close</button>
                                            <DeleteRestaurant restaurant={restaurant} />
                                            {/*//ako imas funkciu map ispred {restaurant &&<DeketeRestaurant></DeketeRestaurant>}*/}


                                        </div>
                                    </Modal>

                                </div>
                            ))}
                        </div>
                        {/*<NavLink href={route('food')} >*/}
                        {/*    Create*/}
                        {/*</NavLink>*/}
                    </div>


                    {/*{user === broj*/}
                    {/*    ?*/}
                    {/*<p>moze</p>*/}
                    {/*    :*/}
                    {/*  <p>ne moze</p>*/}
                    {/*}*/}
                </div>


            {/*<div className="py-12">*/}
            {/*    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">*/}
            {/*        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">*/}
            {/*            <div className="p-6 bg-white border-b border-gray-200">You're logged in Hello Andjela!</div>*/}
            {/*        </div>*/}
            {/*        <NavLink href={route('food')} >*/}
            {/*            Create*/}
            {/*        </NavLink>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </Authenticated>


    );



}

