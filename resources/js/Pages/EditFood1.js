import React, {useEffect, useRef, useState} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {Head, useForm} from '@inertiajs/inertia-react';
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import Button from "@/Components/Button";
import ValidationErrors from "@/Components/ValidationErrors";

import  { Component } from "react";
import {Routes, BrowserRouter, Route, Switch, useParams} from "react-router-dom";


export default function EditFood1(props) {
    const {id} = useParams();
    const [food,setFood]=useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [calories, setCalories] = useState('');
    const [image, setImage] = useState([]);




    useEffect(() => {

        let isMounted = true;

        fetch(`http://127.0.0.1:8000/food/${id}`)

            .then(res => {
                return res.json()
            })
            .then(data => {
                if (isMounted) setFood(data);
            })

        return () => {
            isMounted = false
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

    const updateRestaurant = async (e) => {
        e.preventDefault();

        const formData = new FormData()
        formData.append('_method', 'PUT');
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('calories', calories);
        formData.append('image', image);


        await axios.post(`http://127.0.0.1:8000/food/${id}`, formData);
        let isMounted = true;

        fetch(`http://127.0.0.1:8000/food/${id}`)

            .then(res => {
                return res.json()
            })
            .then(data => {
                if (isMounted) setFood(data);
            })

        return () => {
            isMounted = false
        };
    }

    console.log(food)
    return (

        // <div>
        //     <h1>Edit {food.name} </h1>
        //     <div>
        //         <form style={{'padding-left': '500px'}} className="col-md-9" onSubmit={updateRestaurant}>
        //
        //             <input type="text" value={name || food.name } onChange={(event) => {
        //                 ( setName(event.target.value)  )
        //             }}/><br/>
        //          <br/>
        //
        //             <button className='btn btn-success me-2'>Edit</button>
        //
        //         </form>
        //     </div>
        // </div>

    <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 bg-white border-b border-gray-200">Edit {food.name}!</div>
            </div>



            <form onSubmit={updateRestaurant} encType="multipart/form-data">
                <div>
                    <Label forInput="name" value="Name"/>

                    <input className="mt-1 block w-full" type="text" value={name || food.name } onChange={(event) => {
                        ( setName(event.target.value)  )
                    }}/>


                </div>

                <div>
                    <Label forInput="price" value="Price"/>

                    <input className="mt-1 block w-full" type="text" value={price || food.price } onChange={(event) => {
                        ( setPrice(event.target.value)  )
                    }}/>


                </div>
                <div>
                    <Label forInput="description" value="Description"/>

                    <input className="mt-1 block w-full" type="text" value={description || food.description } onChange={(event) => {
                        ( setDescription(event.target.value)  )
                    }}/>


                </div>
                <div>
                    <Label forInput="calories" value="Calories"/>

                    <input className="mt-1 block w-full" type="text" value={calories || food.calories } onChange={(event) => {
                        ( setCalories(event.target.value)  )
                    }}/>


                </div>





                {/*<div>*/}
                {/*    <Label forInput="description" value="Description"/>*/}

                {/*    <Input*/}
                {/*        type="text"*/}
                {/*        name="description"*/}
                {/*        value={data.description}*/}
                {/*        className="mt-1 block w-full"*/}
                {/*        isFocused={true}*/}
                {/*        handleChange={onHandleChange}*/}
                {/*    />*/}
                {/*</div>*/}

                {/*<div>*/}
                {/*    <Label forInput="calories" value="Calories"/>*/}

                {/*    <Input*/}
                {/*        type="text"*/}
                {/*        name="calories"*/}
                {/*        value={data.calories}*/}
                {/*        className="mt-1 block w-full"*/}
                {/*        isFocused={true}*/}
                {/*        handleChange={onHandleChange}*/}
                {/*    />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <Label forInput="image" value="Image"/>*/}

                {/*    <Input*/}
                {/*        type="file"*/}
                {/*        name="image"*/}
                {/*        className="mt-1 block w-full"*/}
                {/*        isFocused={true}*/}
                {/*        handleChange={onFileUploadChange}*/}
                {/*    />*/}
                {/*</div>*/}


                <div className="flex items-center justify-end mt-4">
                    <Button className="ml-4">
                        Save
                    </Button>
                </div>
            </form>
        </div>


    </div>
    );
}
