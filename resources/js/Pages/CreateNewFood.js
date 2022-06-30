import React , { useEffect } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {Head, useForm} from '@inertiajs/inertia-react';
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import Button from "@/Components/Button";
import ValidationErrors from "@/Components/ValidationErrors";

import  { Component } from "react";
import { Routes,BrowserRouter, Route, Switch } from "react-router-dom";


export default function CreateNewFood(props) {




    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        price:'',
        description:'',
        calories:'',
        restaurant_id:4,
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
        e.preventDefault();

        post(route('food2'));
        // post('http://192.168.31.230/api/v1/restaurants/');
    };

    return (
        // <Authenticated
        //     auth={props.auth}
        //     errors={props.errors}
        //
        // >
        //     <Head title="Create" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">Add food!</div>
                    </div>

                    <ValidationErrors errors={errors} />

                    <form onSubmit={submit} enctype="multipart/form-data">
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
                            <Label forInput="price" value="Price" />

                            <Input
                                type="text"
                                name="price"
                                value={data.price}
                                className="mt-1 block w-full"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                        </div>

                        <div>
                            <Label forInput="description" value="Description" />

                            <Input
                                type="text"
                                name="description"
                                value={data.description}
                                className="mt-1 block w-full"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                        </div>

                        <div>
                            <Label forInput="calories" value="Calories" />

                            <Input
                                type="text"
                                name="calories"
                                value={data.calories}
                                className="mt-1 block w-full"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                        </div>   <div>
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



        //
        // </Authenticated>
    );
}
