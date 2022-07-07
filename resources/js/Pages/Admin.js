import React , { useEffect ,useState} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {Head, useForm} from '@inertiajs/inertia-react';
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import Button from "@/Components/Button";
import ValidationErrors from "@/Components/ValidationErrors";

import  { Component } from "react";
import { Routes,BrowserRouter, Route, Switch } from "react-router-dom";
import NavLink from "@/Components/NavLink";
import {ProbaProvider} from "@/Pages/ProbaContext";
import {Proba} from "@/Pages/Proba";
import Ruta from "@/Pages/Ruta";
import AdminRoutes from "@/Pages/AdminRoutes";
import RestaurantProba from "@/Pages/RestaurantProba";
import ShowRestaurant from "@/Pages/ShowRestaurant";
import RandomFood from "@/Pages/RandomFood";
import FavoriteRestaurants from "@/Pages/FavoriteRestaurants";
import TopRated from "@/Pages/TopRated";
import ShowActiveOrders from "@/Pages/ShowActiveOrders";
import Create from "@/Pages/Create";
import CreateNewFood from "@/Pages/CreateNewFood";
import {AllOrders} from "@/Pages/AllOrders";
import EditFood from "@/Pages/EditFood";
import EditFood1 from "@/Pages/EditFood1";
import Staff from "@/Pages/Staff";
import AllStaff from "@/Pages/AllStaff";


export default function Admin(props) {

    const [user,setUser]=useState([]);

console.log('nadji usera',user)
console.log('nadji restoran usera',user.map(us=>us.restaurant.name))

    useEffect(() => {
        let isMounted = true;
        fetch(route('findUser'))
            // fetch('http://192.168.31.230/api/v1/restaurants/')

            .then(res => {
                return res.json()
            })
            .then(data => {
                if (isMounted)      setUser(data);
            })

        return () => { isMounted = false };
    }, []);



console.log(user)

    return (
        <div >

            <div>

<div style={{    'background': '#009879',
    'height': '100px'}}

>
    <h1 style={{    'padding-left': '50px',
        'padding-top': '30px',
    'color':'white'}}><b>{user.map(us=>us.restaurant.name)}
       </b></h1>
</div>
                <BrowserRouter>
                    <div style={{'display': 'flex'}}>
                    <div style={{'width':'20%','padding-top':'45px','padding-left':'40px'}}>
                    <AdminRoutes />
                    {/*<RestaurantProba></RestaurantProba>*/}
                    {/*<Link to={`/restaurants/${restaurant.id}`} ><li><a onClick={() => props.setState1('aaa')}> Show Restaurant </a></li></Link>*/}
                    </div>
                    <div style={{'width':'100%'}}>

                    <Routes>
                        <Route path="/dashboard/" element={<ShowActiveOrders />}>
                        </Route>
                    </Routes>




                    {user && user.map((u)=>
                                        u.id === 4
                                            ?
                                            <Routes>
                                                <Route path="/create/" element={<Create />}>
                                                </Route>
                                            </Routes>
                                            :
                                            ""

                                    )}


                    {user.length !== 0
                                        ?
                        <Routes>
                            <Route path="/addNewFood/" element={<CreateNewFood />}>
                            </Route>
                        </Routes>
                                        :
                                        ""
                                    }

                        {user.length !== 0
                            ?
                            <Routes>
                                <Route path="/allOrders/" element={<AllOrders />}>
                                </Route>
                            </Routes>
                            :
                            ""
                        }

                        {user.length !== 0
                            ?
                            <Routes>
                                <Route path="/editFood/" element={<EditFood />}>
                                </Route>
                            </Routes>
                            :
                            ""
                        }


                        <Routes>
                            <Route path="/edit/:id" element={<EditFood1/>}/>
                        </Routes>

                        <Routes>
                            <Route path="/staff" element={<Staff/>}/>
                        </Routes>

                        <Routes>
                            <Route path="/allStaff" element={<AllStaff/>}/>
                        </Routes>


                    </div>
                    </div>




                </BrowserRouter>


            {/*    <nav>*/}
            {/*    <div >*/}
            {/*        <div className="flex justify-between h-16">*/}
            {/*            <div className="flex">*/}

            {/*               */}



            {/*                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">*/}
            {/*                    <NavLink  style={{'float':'right'}}  href={route('logoutt')} method="post" as="button" >*/}
            {/*                        logout*/}
            {/*                    </NavLink>*/}
            {/*                </div>*/}
            {/*            </div>*/}






            {/*        </div>*/}
            {/*    </div>*/}


            {/*</nav>*/}
            </div>
        </div>
    );
}
