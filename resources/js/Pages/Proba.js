import React, {useContext, useEffect, useState, useRef} from "react";
import {CartContext} from "@/Pages/CartContext";
import {useForm} from "@inertiajs/inertia-react";
import Input from "@/Components/Input";
import Button from "@/Components/Button";
import {ProbaContext} from "@/Pages/ProbaContext";



export const Proba = (props) => {

    const [ordersActive, setOrdersActive] = useContext(ProbaContext);
    // const [cart, setCart] = useContext(CartContext);


    return ordersActive.length;



}
