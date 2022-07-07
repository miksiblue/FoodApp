import React, {useContext, useEffect, useState, useRef} from "react";
import {CartContext} from "@/Pages/CartContext";


export const CartLenght = (props) => {

    const [cart, setCart] = useContext(CartContext);

    return cart.length

}
