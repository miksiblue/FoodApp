import React, {useEffect, useState} from "react";
import {ListaHrane} from "@/Pages/ListaHrane";
import Authenticated from '@/Layouts/Authenticated';
import {Cart} from "@/Pages/Cart";
import {CartProvider} from "@/Pages/CartContext";
import Dashboard from "@/Pages/Dashboard";



const RestaurantList = (props) => {


    return (

        <Authenticated
            auth={props.auth}
            errors={props.errors}

        >
            {/*https://previews.123rf.com/images/pitsanu999/pitsanu9991512/pitsanu999151201030/49026165-green-color-background-.jpg*/}


            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/*<div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">*/}
                    {/*    <div className="p-6 bg-white border-b border-gray-200">All Restaurants!</div>*/}
                    {/*</div>*/}



                    {/*<CartProvider>*/}
                        {/*<Cart></Cart>*/}
                    <Dashboard></Dashboard>
                        {/*<ListaHrane></ListaHrane>*/}
                   {/*</CartProvider>*/}

                </div>
            </div>
        </Authenticated>

    );
}

export default RestaurantList
