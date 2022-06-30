import React, {useEffect, useRef, useState} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {Head, useForm} from '@inertiajs/inertia-react';
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import Button from "@/Components/Button";
import ValidationErrors from "@/Components/ValidationErrors";

import  { Component } from "react";
import { Routes,BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import FoodList from "@/Pages/FoodList";

export default function AllStaff() {


const [staff,setStaff]=useState('');
const [user,setUser]=useState('');

const [sve,setSve]=useState('');
console.log('login user with Auth::user',sve);


    useEffect(() => {


        const fetchStaff=async ()=> {

            const res=await axios.get('http://127.0.0.1:8000/api/v1/allStaff/');
            setStaff(res.data);

        }
        fetchStaff();


        const fetchUser=async ()=> {

            const res=await axios.get('http://127.0.0.1:8000/api/v1/findUser/');
            setUser(res.data);

        }
        fetchUser();

        const fetchSve=async ()=> {

            const res=await axios.get('http://127.0.0.1:8000/api/v1/svi/');
            setSve(res.data);

        }
        fetchSve();

    }, []);




    const deleteStaff = async (id) => {

        axios.delete(`http://127.0.0.1:8000/api/v1/refusal/${id}`);

        let isMounted = true;

        fetch('http://127.0.0.1:8000/api/v1/allStaff/')

            .then(res => {
                return res.json()
            })
            .then(data => {
                if (isMounted) setStaff(data);
            })

        return () => {
            isMounted = false
        };
    }

    return (

        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <p> All Staff</p>

                        {staff && staff.map(staf=>(
                            <div>


                             <p>Name :<b>{staf.user.name}</b></p>
                             <p>Email :<b>{staf.user.email}</b></p>
                             <p>Salary : <b>{staf.salary} $ </b></p>
                             <p>Shift : <b>{staf.shift}  </b></p>

                                    <button className='btn btn-success me-2' onClick={() => deleteStaff(staf.id)}>
                                        Refusal
                                    </button>


                                <hr/>

                            </div>
                        ))}

                        </div></div></div></div>

    );
}



