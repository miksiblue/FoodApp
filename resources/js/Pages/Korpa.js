import React, {useContext, useState, useRef, useEffect} from "react";
import {useForm} from "@inertiajs/inertia-react";
import Button from "@/Components/Button";
import {Card, Col, Row} from "react-bootstrap";
import {FcLike} from "react-icons/fc";
import set from "alpinejs";
import {Cart} from "@/Pages/Cart";
import {CartProvider} from "@/Pages/CartContext";

export default function Korpa(props) {






    return (
        <div style= {{'padding-top':'50px'}}>


            <Cart></Cart>

        </div>
    );
}
