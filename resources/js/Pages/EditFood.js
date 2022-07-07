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

export default function EditFood(props) {


const [restaurants,setRestaurant]=useState([]);

    const { data, setData} = useForm({
p:[]
    });

    const [formData, setFormData] = useState({});








    useEffect(() => {

        let isMounted = true;

        fetch(route('restaurantFood'))

            .then(res => {
                return res.json()
            })
            .then(data => {
                if (isMounted) {
                    setRestaurant(data);
                    const restaurantData = data[0].food;
                    console.log('restaurant', restaurantData);
                    const object = restaurantData.reduce(
                        // (obj, item) => Object.assign(obj, { [item.id]: 6 }), {});
                         (obj, item) => Object.assign(obj), {});
                    console.log(object)

                    setFormData(object);
                    // setFormData()
                }
            })

        return () => {
            isMounted = false
        };

    }, []);

    const deleteProduct = async (id) => {

         axios.delete(`http://127.0.0.1:8000/api/v1/foods/${id}`);

        let isMounted = true;

        fetch(route('restaurantFood'))

            .then(res => {
                return res.json()
            })
            .then(data => {
                if (isMounted) setRestaurant(data);
            })

        return () => {
            isMounted = false
        };
    }

    console.log(...data.p)
    // console.log(...data)
    // console.log(p)


    const onHandleChange = (event, id) => {
        console.log('ID', id);
        setFormData({
            ...formData,
            [id]:  event.target.value
        })

        console.log(event.target.value)
console.log(formData);



           setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);

        // const value = event.target.value;
        // setData({
        //     ...data,
        //     [event.target.name]: value
        // });

        // setData((p)=>
        // p.map((d)=>
        // d.id===id
        //     ? {
        //     ...d,
        //     value:event.target.value
        //     }
        //     : d
        // )
        // )

    }



    const putOnSale = async (id ) => {




     console.log(data.p)
     console.log(formData)
        axios.put(`http://127.0.0.1:8000/saleFood/${id}`,data);

        let isMounted = true;

        fetch(route('restaurantFood'))

            .then(res => {
                return res.json()
            })
            .then(data => {
                if (isMounted) setRestaurant(data);
            })

        return () => {
            isMounted = false
        };
    }

    const removeAction = async (id) => {

        axios.put(`http://127.0.0.1:8000/removeAction/${id}`);

        let isMounted = true;

        fetch(route('restaurantFood'))

            .then(res => {
                return res.json()
            })
            .then(data => {
                if (isMounted) setRestaurant(data);
            })

        return () => {
            isMounted = false
        };
    }

console.log('restorants',restaurants)
    return (

<div>



    {restaurants && restaurants.map(restaurant=>(
        <div>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <p> {restaurant.name}</p>


        <table style={{'width':'100%'}} className='styled-table'>
            <thead>
            <tr>
                <th style={{'width':'75px'}}>ID</th>
                <th>Name</th>

                <th>Price</th>
                <th>Action price</th>
                <th>Description</th>
                <th>Calories</th>
                <th>...</th>
            </tr>
            </thead>

            <tbody>
            {restaurant && restaurant.food.map((f,z)=>(

                <tr>
                    <td  style={{'border': '1px solid black'}}>{f.id}</td>
                    <td   style={{'border': '1px solid black'}}>{f.name}</td>
                    <td  style={{'border': '1px solid black'}}>{f.price} RSD</td>
                    <td  style={{'border': '1px solid black'}}>{f.sale}</td>
                    <td  style={{'border': '1px solid black'}}> {f.description} </td>
                    <td  style={{'border': '1px solid black'}}> {f.calories} </td>
                    <td   style={{'border': '1px solid black'}}>

                        <Link to={`/edit/${f.id}`} className='btn btn-success me-2'>
                                                     Edit
                                                 </Link>

                        <button className='btn btn-success me-2'  onClick={()=>deleteProduct(f.id)}>
                            Delete
                        </button>
                        {console.log(z)}
                        <Input
                            key={z}
                            type="text"
                             name="p"
                             value={formData[f.id]}
                           isFocused={true}
                            className="mt-1 block w-full"


                            // handleChange={(event)=>setData(event.target.name, event.target.value)}
                             handleChange={(e) => onHandleChange(e,f.id)}


                            // onChange={(event) => setData(event.target.name)}
                        />

                        {100-((f.sale/f.price)*100)===100 ? <p>Without action</p> : <p>{100-((f.sale/f.price)*100)}% on sale</p> }
                      {/*<p>  {100-((f.sale/f.price)*100)}% on sale</p>*/}
                        <button  onClick={()=>putOnSale(f.id)}>Put on sale</button>
                        <br/>
                        <button  onClick={()=>removeAction(f.id)}>Remove action</button>
                    </td>


                </tr>


            ))}
            </tbody>

        </table>
        </div>  </div></div> </div></div>
    ))}
</div>
    );
}

//
// <div>
//
//     {restaurants && restaurants.map(restaurant=>(
//         <div>
//             {restaurant.name}
//             {restaurant && restaurant.food.map(f=>(
//                 <div style={{'display':'flex'}}>
//                     <div style={{'width':'50%'}}>
//                     {f.name}
//                     </div>
//                     <div  style={{'width':'10%'}}>
//                     <Link to={`/edit/${f.id}`} className='btn btn-success me-2'>
//                         Edit
//                     </Link>
//                     </div>
//                     <hr/>
//                 </div>
//             ))}
//         </div>
//     ))}
//
// </div>

