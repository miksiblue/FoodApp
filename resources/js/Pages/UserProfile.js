import React, {useEffect, useState} from 'react';
import Authenticated from "@/Layouts/Authenticated";
import {BsArrowLeftShort} from "react-icons/bs";
import NavLink from '@/Components/NavLink';
import {Card, Col, Row} from "react-bootstrap";

export default function UserProfile(props) {


    const [user,setUser]=useState({
        user:'',
        userOrder:[]
    });

    const [prikaz,setPrikaz]=useState('orders');

    console.log('user array',user)


    useEffect(() => {
        const fetchUser=async ()=> {
            const res=await axios.get(route('userProfile'));
            setUser(res.data);
        }
        fetchUser();




    }, []);


    return (

        <Authenticated
            auth={props.auth}
            errors={props.errors}

        >

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8" style={{'margin-top':'-100px',
                    'display': 'flex',
                    'flex-direction': 'row',
                    'padding-bottom': '20px',
                    'background':'white',
                    'padding-top':'30px',
                    'font-family': 'serif',
                    'font-style': 'italic',
                    'font-size': '17px'

                }}>
 <div style={{'display': 'inline-flex'}}>

     <p style={{'padding-right':'30px'}}>{user.user.name}</p>
     <p style={{'padding-right':'30px'}}>{user.user.address}</p>
     <p style={{'padding-right':'30px'}} >06112912</p>




 </div>
                    <div style={{'margin-left': 'auto'}}>
                        {user.user.userrole_id!==1 ? <a href="http://127.0.0.1:8000/admin/dashboard">Go to dashboard</a> : ''}
{/*<button onClick={()=>setPrikaz('changeProfile')}>Change profile info</button>*/}
                    </div>
                    </div>




                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                    <NavLink  style={{'text-decoration': 'none','float':'right'}}  href={route('dashboard')} method="get"  >
                        <BsArrowLeftShort size={60}/>
                    </NavLink>


                </div>

                {prikaz === 'orders' ?

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">


                    <h1 style={{'margin-left':'250px'}}>My orders</h1>

                    <Row xs={1} md={1} className="g-3" style={{'width':'750px','margin-left':'250px'}}>

                        { user.userOrder.map((order, idx) => {

                            return (
                                <Col key={idx}>
                                    <Card>
                                        <Card.Body

                                        >

                                            <Card.Title
                                                style={{
                                                    'border-radius': '20px',
                                                    width: '100%',
                                                    'height': '100%',
                                                    'background-size': '100%',
                                                    'background-position': '50%',
                                                    'background-repeat': 'no-repeat',
                                                    transition: 'background-size .15s ease-in-out',
                                                    // backgroundImage: `url(${restaurant.restaurant.image})`
                                                }} >
<div style={{'display': 'inline-flex'}}>
                                          <div style={{'padding-right': '30px'}}>
                                                <Card.Img style={{width:'200px','border-radius':'20px','height': '180px'}}
                            variant="top" src={order.restaurant.image} />
                                          </div>
                                               <div>
                                                <h1><b>{order.restaurant.name}</b></h1>
                                                   {order.food.map(hrana=><div>
                                                 <p style={{'color': '#c2c7c2', 'font-size': '15px'}}> {hrana.name} </p>
                                                   </div>)}
                                                   <p>{order.price} din</p>
                                               </div>
</div>


                                            </Card.Title>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>


                </div>
                    : ''}
            </div>

            </Authenticated>
    );
}
