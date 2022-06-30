import React, {useContext, useEffect, useState} from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
// import { Link } from '@inertiajs/inertia-react';
import {CartContext, CartProvider} from "@/Pages/CartContext";
import {Proba} from "@/Pages/Proba";
import {ProbaProvider} from '@/Pages/ProbaContext';
import {Cart} from "@/Pages/Cart";
import ShowActiveOrders from "@/Pages/ShowActiveOrders";
import classes1 from "../../css/a.css";
// import {Proba} from "@/Pages/ActiveOrders";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Ruta from "@/Pages/Ruta";
import TopRated from "@/Pages/TopRated";
import FavoriteRestaurants from "@/Pages/FavoriteRestaurants";
import RestaurantProba from "@/Pages/RestaurantProba";
import ShowRestaurant from "@/Pages/ShowRestaurant";
import RandomFood from "@/Pages/RandomFood";





export default function Authenticated({ auth, header, children,props }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [user,setUser]=useState([]);

    const[data,setData]=useState([]);
    console.log(data)

    const broj=0;
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


function search(key){
    console.log(key)
    // let result= fetch('http://127.0.0.1:8000/api/v1/search/'+key);
    // result= result.json();
    // setData(result)


    let isMounted = true;

    fetch('http://127.0.0.1:8000/api/v1/search/'+key)

        .then(res => {
            return res.json()
        })
        .then(data => {
            if (isMounted) setData(data);
        })

    return () => {
        isMounted = false
    };
}


    return (

        <div className="min-h-screen bg-gray-100">


            <div style={{
                'position': 'fixed',
                'top': '0' ,
                'width': '100%',
                'z-index': '9999'}}>



                <div style={{
                    'background': 'rgba(0,0,0,0.7)'
                }}>

                    <div style={{'display': 'flex',}}>

                        <div tyle={{    'display': 'flex'}}>
                    <img  style={{"width":"150px",
                        'margin-right': 'auto',
                        'margin-left': '350px',
                        'padding-bottom':'9px',
                        }}
                        src="https://cdn.discordapp.com/attachments/920970435498242049/976111176276639804/logo3-removebg-preview.png" />
                        </div>
                        <div style={{    'margin-top': 'auto',
                            'margin-bottom': 'auto',
                            'margin-left': 'auto',
                            'margin-right': 'auto',
                            'padding-left':'200px'


                        }}>
                            {/*<input onChange={(e)=>search(e.target.value)}*/}
                            {/*    placeholder='What to eat?'*/}
                            {/*    style={{'width':'400px',*/}
                            {/*    'font-size': '0.9375rem',*/}
                            {/*    'border': '4px solid #fff',*/}
                            {/*    'height': '47px',*/}
                            {/*    'padding': '12px 22px 12px',*/}
                            {/*    'background': 'transparent',*/}
                            {/*        'text-align': 'center'*/}


                            {/*}}  ></input>*/}

                            {/*<div>{data && data.map(d=>(<div>*/}
                            {/*    {d.name}*/}



                            {/*</div>))}</div>*/}
                        </div>
                        <div  style={{    'display': 'flex',
                            'margin-left': 'auto',
                            'margin-right': '350px'
                        }}>

                            <NavLink  style={{'text-decoration': 'none','float':'right'}}  href={route('profil')} method="get"  >
                                <p  style={{
                                    'text-decoration': 'none',
                                    'display': 'inline-flex',
                                    'min-height': '40px',
                                    'align-items': 'center',
                                    'border-radius': '39px',
                                    'background-color': 'rgb(255, 255, 255)',
                                    'padding-right': '15px',
                                    'padding-left': '15px',
                                    'font-size':'15px',
                                }}><b>My Profile</b></p>
                            </NavLink>


                            {/*<NavLink  style={{'text-decoration': 'none','float':'right'}}  href={route('logoutt')} method="post"  >*/}
                            {/*    <p  style={{*/}
                            {/*        'text-decoration': 'none',*/}
                            {/*        'display': 'inline-flex',*/}
                            {/*        'min-height': '40px',*/}
                            {/*        'align-items': 'center',*/}
                            {/*        'border-radius': '39px',*/}
                            {/*        'background-color': 'rgb(255, 255, 255)',*/}
                            {/*        'padding-right': '15px',*/}
                            {/*        'padding-left': '15px',*/}
                            {/*        'font-size':'15px',*/}
                            {/*    }}><b>My Orders</b></p>*/}
                            {/*</NavLink>*/}


                            <NavLink  style={{'text-decoration': 'none','float':'right'}}  href={route('logoutt')} method="post"  >
                                <p  style={{
                                    'text-decoration': 'none',
                                    'display': 'inline-flex',
                                    'min-height': '40px',
                                    'align-items': 'center',
                                    'border-radius': '39px',
                                    'background-color': 'rgb(255, 255, 255)',
                                    'padding-right': '15px',
                                    'padding-left': '15px',
                                    'font-size':'15px',
                                }}><b>Log out</b></p>
                            </NavLink>




                        </div>

<div>

</div>
                    </div>
                </div>

                <div style={{
                    'padding-top': '16px',
                    'padding-bottom': '1px',
                    'text-align': 'center',
                    'background': `url('https://www.readyseteat.com/sites/g/files/qyyrlu501/themes/site/theme-readyseteat/images/megamenu-navbar-bg-pattern.png')`,
                    'font-family': 'serif',
                    'font-style': 'italic',
                    'font-size': '19px'
                }}>

                    <p><b>Order food to your door</b></p>


                </div>
            </div>
            <div  style={{'height': 'calc(111vh - 30rem)',
                'background': `url('https://images.squarespace-cdn.com/content/v1/5c0ed9a3f93fd4e41d0dcd82/1554384014944-IC20AT9ZIK3C50R87K7C/WBC_4469.jpg?format=1000w')`,
                'background-repeat': 'no-repeat',

                'background-attachment': 'fixed',
                'background-position': 'center center',
                'background-size': 'cover'


            }}>


                <div>  <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">

                    <div> <nav>
                        <div style={{'float':'right'}}  >


                        </div>


                    </nav>
                    </div>
                </div>
                </div>





                    <div style={{'padding-top':'200px','width':'400px','margin-left':'auto','margin-right':'auto'}}>



                        <h1 style={{'color':'white',    'font-size': '70px',



                            // 'font-style': 'italic',
                            'font-weight': '700',
                             'line-height': '1.2',
'max-width':'92%',
                             'background': 'rgba(0,0,0,0.33)',

                             'box-sizing': 'border-box',
                             'padding': '30px 30px',
                            'z-index':' 1',
                            'font-family': 'serif'

                                                }} ><b>TastyFood</b></h1>


                                            </div>
                                            {/*<img  style={{"width":"280px",*/}
                    {/*    'margin-left': 'auto',*/}
                    {/*    'margin-right': 'auto',*/}
                    {/*}}   src="https://cdn.discordapp.com/attachments/920970435498242049/976111176276639804/logo3-removebg-preview.png" />*/}






                    {/*<nav>*/}
                    {/*    <div >*/}
                    {/*        <div className="flex justify-between h-16">*/}
                    {/*            <div className="flex">*/}


                    {/*                /!*<div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">*!/*/}
                    {/*                /!*    <NavLink href={route('dashboard')} active={route().current('dashboard')}>*!/*/}
                    {/*                /!*        Dashboard*!/*/}
                    {/*                /!*    </NavLink>*!/*/}
                    {/*                /!*</div>*!/*/}


                    {/*                /!*<div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">*!/*/}
                    {/*                /!*    <NavLink href={route('foodlist')} >*!/*/}
                    {/*                /!*        FoodList*!/*/}
                    {/*                /!*    </NavLink>*!/*/}
                    {/*                /!*</div>*!/*/}

                    {/*                {user.length !== 0*/}
                    {/*                    ?*/}
                    {/*                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">*/}
                    {/*                    <NavLink href={route('restaurantlist')} >*/}
                    {/*                        Restaurants*/}
                    {/*                    </NavLink>*/}
                    {/*                </div>*/}

                    {/*                    :*/}
                    {/*                    ''*/}
                    {/*                }*/}


                    {/*                {user.length !== 0*/}
                    {/*                    ?*/}
                    {/*                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">*/}
                    {/*                    /!*<ShowActiveOrders.Provider>*!/*/}
                    {/*                    /!*</ShowActiveOrders.Provider>*!/*/}

                    {/*                    <NavLink href={route('showActiveOrders')} >*/}
                    {/*                        /!*{ordersActive.length}  *!/*/}

                    {/*                        <ProbaProvider>*/}
                    {/*                            Active orders:  <Proba></Proba>*/}
                    {/*                        </ProbaProvider>*/}
                    {/*                    </NavLink>*/}

                    {/*                </div>*/}
                    {/*                    :*/}
                    {/*                    ''*/}
                    {/*                }*/}

                    {/*                {user && user.map((u)=>*/}
                    {/*                u.id === 4*/}
                    {/*                    ?*/}
                    {/*                    <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">*/}
                    {/*                        <NavLink href={route('create')}>*/}
                    {/*                            Create new restaurant*/}
                    {/*                        </NavLink>*/}
                    {/*                    </div>*/}
                    {/*                    :*/}
                    {/*                    ""*/}

                    {/*                )}*/}

                    {/*                {user.length !== 0*/}
                    {/*                        ?*/}
                    {/*                        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">*/}
                    {/*                            <NavLink href={route('createnewfood')}>*/}
                    {/*                                Add Food*/}
                    {/*                            </NavLink>*/}
                    {/*                        </div>*/}
                    {/*                        :*/}
                    {/*                        ""*/}
                    {/*                }*/}

                    {/*                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">*/}
                    {/*                    <NavLink   href={route('logoutt')} method="post" as="button" >*/}
                    {/*                        logout*/}
                    {/*                    </NavLink>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}






                    {/*        </div>*/}
                    {/*    </div>*/}


                    {/*</nav>*/}









            </div>
            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>

            {/*<footer>*/}
            {/*    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">*/}

            {/*        <div> <nav>*/}
            {/*            <div >*/}
            {/*                <div className="flex justify-between h-16">*/}
            {/*                    <div className="flex">*/}


            {/*                        /!*<div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">*!/*/}
            {/*                        /!*    <NavLink href={route('dashboard')} active={route().current('dashboard')}>*!/*/}
            {/*                        /!*        Dashboard*!/*/}
            {/*                        /!*    </NavLink>*!/*/}
            {/*                        /!*</div>*!/*/}


            {/*                        /!*<div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">*!/*/}
            {/*                        /!*    <NavLink href={route('foodlist')} >*!/*/}
            {/*                        /!*        FoodList*!/*/}
            {/*                        /!*    </NavLink>*!/*/}
            {/*                        /!*</div>*!/*/}

            {/*                        {user.length !== 0*/}
            {/*                            ?*/}
            {/*                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">*/}
            {/*                                <NavLink href={route('dashboard')} >*/}
            {/*                                    Restaurants*/}
            {/*                                </NavLink>*/}
            {/*                            </div>*/}

            {/*                            :*/}
            {/*                            ''*/}
            {/*                        }*/}


            {/*                        {user.length !== 0*/}
            {/*                            ?*/}
            {/*                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">*/}
            {/*                                /!*<ShowActiveOrders.Provider>*!/*/}
            {/*                                /!*</ShowActiveOrders.Provider>*!/*/}

            {/*                                <NavLink href={route('showActiveOrders')} >*/}
            {/*                                    /!*{ordersActive.length}  *!/*/}

            {/*                                    <ProbaProvider>*/}
            {/*                                        Active orders:  <Proba></Proba>*/}
            {/*                                    </ProbaProvider>*/}
            {/*                                </NavLink>*/}

            {/*                            </div>*/}
            {/*                            :*/}
            {/*                            ''*/}
            {/*                        }*/}

            {/*                        {user && user.map((u)=>*/}
            {/*                            u.id === 4*/}
            {/*                                ?*/}
            {/*                                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">*/}
            {/*                                    <NavLink href={route('create')}>*/}
            {/*                                        Create new restaurant*/}
            {/*                                    </NavLink>*/}
            {/*                                </div>*/}
            {/*                                :*/}
            {/*                                ""*/}

            {/*                        )}*/}

            {/*                        {user.length !== 0*/}
            {/*                            ?*/}
            {/*                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">*/}
            {/*                                <NavLink href={route('createnewfood')}>*/}
            {/*                                    Add Food*/}
            {/*                                </NavLink>*/}
            {/*                            </div>*/}
            {/*                            :*/}
            {/*                            ""*/}
            {/*                        }*/}

            {/*                        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">*/}
            {/*                            <NavLink  style={{'float':'right'}}  href={route('logoutt')} method="post" as="button" >*/}
            {/*                                logout*/}
            {/*                            </NavLink>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}






            {/*                </div>*/}
            {/*            </div>*/}


            {/*        </nav>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</footer>*/}
        </div>
    );
}

