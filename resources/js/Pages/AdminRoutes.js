import { Link } from "react-router-dom";
import {ProbaProvider} from "@/Pages/ProbaContext";
import {Proba} from "@/Pages/Proba";
import React, {useEffect, useState} from "react";
import NavLink from "@/Components/NavLink";

const Ruta=(props)=> {


    const [user,setUser]=useState([]);


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


    return (


        <div style={{

            'flex-direction': 'row',
            'justify-content': 'center', 'padding-bottom': '20px',
            'background':'white',
            'padding-top':'30px',
            // 'font-family': 'serif',
            // 'font-style': 'italic',
            'font-size': '17px'
        }}>

            <Link to='/dashboard' style={{'text-decoration':'none'}}> <p style={{'padding-right': '100px' ,'text-decoration': 'none',
                'color': 'black'}}><b>

            <ProbaProvider>
                Active orders:  <Proba></Proba>
            </ProbaProvider>
            </b></p></Link>


            <br/>

            <Link to='/allOrders' style={{'text-decoration':'none'}}> <p style={{'padding-right': '100px' ,'text-decoration': 'none',
                'color': 'black'}}><b>
                All orders
            </b></p></Link>

            <br/>

            <Link to='/allStaff' style={{'text-decoration':'none'}}> <p style={{'padding-right': '100px' ,'text-decoration': 'none',
                'color': 'black'}}><b>
                All staff
            </b></p></Link>

            <br/>

            {user && user.map((use=>use.user.roles.map(us=>

                us.id === 1
                    ?

            <Link to='/addNewFood' style={{'text-decoration':'none'}}> <p style={{'padding-right': '100px' ,'text-decoration': 'none',
                'color': 'black'}}><b>
                Add new food
            </b></p></Link>
                    :
                    ""

            )))}


            <br/>





            {console.log('korisnik provera',user.map(use=>use.user.roles.map(us=>us.id)))}
            {user && user.map((use=>use.user.roles.map(us=>

                us.id === 1
                    ?
            <Link to='/staff' style={{'text-decoration':'none'}}> <p style={{'padding-right': '100px' ,'text-decoration': 'none',
                'color': 'black'}}><b>
                Add Staff
            </b></p></Link>
                    :
                    ""

            )))}
<br/>

            {user && user.map((use=>use.user.roles.map(us=>

                us.id === 1
                    ?


            <Link to='/editFood' style={{'text-decoration':'none'}}> <p style={{'padding-right': '100px' ,'text-decoration': 'none',
                'color': 'black'}}><b>
                Edit Food
            </b></p></Link>

                    :
                    ""

            )))}
            <br/>

            {user && user.map((use=>use.user.roles.map(us=>

                us.id === 3
                    ?

                    <Link to='/create' style={{'text-decoration':'none'}}> <p style={{'padding-right': '100px' ,'text-decoration': 'none',
                        'color': 'black'}}><b>
                        Create New Restaurant
                    </b></p></Link>

                    :
                    ""
            )))}
            <hr/>
            <NavLink  style={{'float':'right'}}  href={route('logoutt')} method="post"  >
             <p  style={{'padding-right': '100px' ,'text-decoration': 'none',
                 'color': 'black'}}><b> logout </b> </p>
            </NavLink>



        </div>


    );

}


export default Ruta;
