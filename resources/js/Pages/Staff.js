import React, {useEffect, useRef, useState} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {Head, useForm} from '@inertiajs/inertia-react';
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import Button from "@/Components/Button";
import ValidationErrors from "@/Components/ValidationErrors";

import  { Component } from "react";
import {Routes, BrowserRouter, Route, Switch, useParams} from "react-router-dom";


export default function Staff() {

    const { data, setData, post, processing, errors, reset } = useForm({
        salary: '',
        user_id:'',
        restaurant_id:1,
        shift:''
    });


    useEffect(() => {
        return () => {
            reset('name');
        };
    }, []);


    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);

    };

    const submit = (e) => {

        post('http://127.0.0.1:8000/api/v1/storeStaff');


    };

    return (

        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">Add Staff!

                    <br/>

                        <form onSubmit={submit}>
                            <div>
                                <Label forInput="salary" value="Salary" />

                                <Input
                                    type="text"
                                    name="salary"
                                    value={data.salary}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                />
                            </div>

                            <div>
                                <Label forInput="user_id" value="Email" />

                                <Input
                                    type="text"
                                    name="user_id"
                                    value={data.user_id}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                />
                            </div>

                            <div>
                                <Label forInput="shift" value="Shift" />

                                <Input
                                    type="text"
                                    name="shift"
                                    value={data.shift}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                />
                            </div>





                            <div className="flex items-center justify-end mt-4">
                                <Button className="ml-4" processing={processing}>
                                    Save
                                </Button>
                            </div>
                        </form>
                    </div>

                </div>



            </div>


        </div>



    );
}
