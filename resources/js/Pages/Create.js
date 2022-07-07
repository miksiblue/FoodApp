import React , { useEffect , useRef } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {Head, useForm} from '@inertiajs/inertia-react';
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import Button from "@/Components/Button";
import ValidationErrors from "@/Components/ValidationErrors";

import  { Component } from "react";
import { Routes,BrowserRouter, Route, Switch } from "react-router-dom";


export default function Create(props) {




    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        phone:'',
        email:'',
        working_hours:'',
        location:'',
        image: ""


    });


    useEffect(() => {
        return () => {
            reset('name');
        };
    }, []);


    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);

    };

    const onFileUploadChange = (e) => {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
            return;

        console.log(files[0])

        setData("image", files[0]);
    };

    const submit = (e) => {

        // e.preventDefault();
        window.location.reload(false)
        // data.image='https://thumbs.dreamstime.com/b/asian-food-background-various-ingredients-rustic-stone-top-view-vietnam-thai-cuisine-148762904.jpg'
        post(route('restaurants'));
        window.location.reload(false)
        // post('http://192.168.31.230/api/v1/restaurants/');
    };

    return (
        // <Authenticated
        //     auth={props.auth}
        //     errors={props.errors}
        //
        // >


            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">Create new restaurant</div>
                    </div>

                    <ValidationErrors errors={errors} />

                    <form onSubmit={submit}>
                        <div>
                            <Label forInput="name" value="Name" />

                            <Input
                                type="text"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                        </div>

                        <div>
                            <Label forInput="phone" value="Phone" />

                            <Input
                                type="text"
                                name="phone"
                                value={data.phone}
                                className="mt-1 block w-full"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                        </div>

                        <div>
                            <Label forInput="email" value="Email" />

                            <Input
                                type="text"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                        </div>

                        <div>
                            <Label forInput="working_hours" value="working_hours" />

                            <Input
                                type="text"
                                name="working_hours"
                                value={data.working_hours}
                                className="mt-1 block w-full"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                        </div>

                        <div>
                            <Label forInput="location" value="location" />

                            <Input
                                type="text"
                                name="location"
                                value={data.location}
                                className="mt-1 block w-full"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                        </div>

                        <div>
                            <Label forInput="image" value="Image" />

                            <Input
                                type="file"
                                name="image"
                                className="mt-1 block w-full"
                                isFocused={true}
                                handleChange={onFileUploadChange}
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




        // </Authenticated>
    );
}
