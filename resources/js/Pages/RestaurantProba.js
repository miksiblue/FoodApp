import React, {useContext, useState, useRef, useEffect} from "react";
import {useForm} from "@inertiajs/inertia-react";
import Button from "@/Components/Button";
import {Card, Col, Row} from "react-bootstrap";
import {FcLike} from "react-icons/fc";
import set from "alpinejs";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcAlphabeticalSortingAz } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import {CartProvider} from "@/Pages/CartContext";
import Modal from "react-modal";
import classes1 from "@/UI/Modal.module.css";
import {RestaurantData} from "@/Pages/RestaurantData";
import {Hrana} from "@/Pages/Hrana";
import {ActiveOrders} from "@/Pages/ActiveOrders";
import {AllOrders} from "@/Pages/AllOrders";
import ShowRestaurant from "@/Pages/ShowRestaurant";
import Ruta from "@/Pages/Ruta";
import {BrowserRouter, Route, Routes, Link, Router  } from "react-router-dom";
import {OrderBy} from "@/Pages/OrderBy";
import {OrderByCategory} from "@/Pages/OrderByCategory";
import {Cart} from "@/Pages/Cart";
import {OrderBySearch} from "@/Pages/OrderBySearch";

export default function RestaurantProba(props) {

    const [array1,setArray1]=useState([]);
    const duplicateCheck = [];
    const [state1,setState1]=useState('restorani');

    const[search2,setSearch]=useState([]);

    const [restaurants, setRestaurants] = useState('');
    const [filter, setFilter] = useState({
        orderByName:'',
        orderByScore:'',
        orderBySale:'',
        orderByCategory:[]
    });


  const nizAkcija=restaurants && restaurants.map(restaurant=>restaurant.food?.filter(a=> a.sale!==null).map(f=>100-((f.sale/f.price)*100)));

    const [users, setUsers] = useState('');
    const [categories, setCategories] = useState({
        p:[]
    });


    const {data, setData, post} = useForm({

        restaurant_id: '',

    });

    const broj = 13;

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalData, setModalData] = useState('');



    function search1(key){


        console.log('key',key.length);
        if(key.length!==0){
            let isMounted = true;

            fetch('http://127.0.0.1:8000/api/v1/search/'+key)

                .then(res => {
                    return res.json()

                })
                .then(data => {
                    if (isMounted) setSearch(data);
                })

            return () => {
                isMounted = false
            };
        }
        else{
            setState1('restorani')
        }


    }


    useEffect(() => {

        let isMounted = true;

        fetch(route('filter'))
            // fetch('http://127.0.0.1:8000/api/v1/randomFood/')

            .then(res => {
                return res.json()

            })
            .then(data => {
                if (isMounted) setFilter(data);
            })

        return () => {
            isMounted = false
        };

    }, []);



    const addFavoriteRestaurant = (value) => {
        let isMounted = true;
        data.restaurant_id = value;
        // setData(data.restaurant_id=value)

        post(route('storeFavoriteRestoran'))

        fetch(route('allRestaurants'))
            // fetch('http://192.168.31.230/api/v1/restaurants/')

            .then(res => {

                return res.json()
            })
            .then(data => {
                if (isMounted) setRestaurants(data);

            })

        return () => {
            isMounted = false
        };


    }


    const deleteFavoriteRestaurant = (value) => {
        data.restaurant_id = value;
        post(route('deleteFavoriteRestaurant'))

        let isMounted = true;
        fetch(route('allRestaurants'))
            // fetch('http://192.168.31.230/api/v1/restaurants/')

            .then(res => {

                return res.json()
            })
            .then(data => {
                if (isMounted) setRestaurants(data);

            })

        return () => {
            isMounted = false
        };

    }

    useEffect(() => {

        let isMounted = true;

        fetch(route('allRestaurants'))
            // fetch('http://127.0.0.1:8000/api/v1/randomFood/')

            .then(res => {
                return res.json()
            })
            .then(data => {
                if (isMounted) setRestaurants(data);
            })

        return () => {
            isMounted = false
        };

    }, []);

    useEffect(() => {

        let isMounted = true;

        fetch(route('findLoginPerson'))

            .then(res => {
                return res.json()
            })
            .then(data => {
                if (isMounted) setUsers(data);
            })

        return () => {
            isMounted = false
        };

    }, []);

    const postavi = (e,id) => {


         array1.push(id);


        let isMounted = true;

        fetch(route('allRestaurants'))
            // fetch('http://127.0.0.1:8000/api/v1/randomFood/')

            .then(res => {
                return res.json()
            })
            .then(data => {
                if (isMounted) setRestaurants(data);
            })

        return () => {
            isMounted = false
        };
    }

    const izbrisi = (e,id) => {

        setArray1(  array1.filter(item => item !== id))


    }

    return (
        <div style={{'padding-top':'20px'}}>


           <p style={{'font-family': 'serif',
               'font-style': 'italic',
               'font-size': '17px',
               'display': 'flex'
           }}><FcAlphabeticalSortingAz onClick={()=>setModalIsOpen(true)}  size={30} />
               <p onClick={()=>setModalIsOpen(true)}  style={{'width':'100px','paddingLeft':'10px'}}> Sort by </p>


               <input onChange={(e)=>search1(e.target.value) && setState1('search')}
                      placeholder='What to eat?'
                      style={{'width':'400px',
                          'font-size': '0.9375rem',
                          'border': '4px solid #fff',
                          'height': '47px',
                          'padding': '12px 22px 12px',
                          'background': 'transparent',
                          'text-align': 'center',
                          'margin-left': '70%'


                      }}  ></input>




           </p>

            <Modal style={{'z-index': '99999999999'}} className={classes1.category}   isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>

                <div>
                <div>
<h1>Sort by food</h1>

                    <Row xs={1} md={4} className="g-3">
                    {filter && filter.orderByCategory.map(category=>(

                        <div>


                            {array1.includes(category.id) ?   <p style={{'color':'green'}} onClick={(e)=>izbrisi(e,category.id)}>  {category.category}</p> : <button onClick={(e)=>postavi(e,category.id)}>

                                <p  onClick={()=>setState1('category')}  > {category.category} </p>       </button>}

                            {/*<p>  {category.category}</p>*/}
                        </div>

                    ))}

                    </Row>





                </div>
                    <div>
                        <h1>Sort by restaurants</h1>

<div style={{'display':'flex','justify-content': 'space-between'}}>
                        <p onClick={()=>setState1('orderByName')} >Name</p>
                        <p onClick={()=>setState1('restorani')}>All Restaurants</p>
                        <p onClick={()=>setState1('score')}>Score</p>
                        <p onClick={()=>setState1('sale')}>Action</p>
                        {/*<p onClick={()=>setState1('category')}>Pizza</p>*/}
</div>
                    </div>
                </div>
            </Modal>



            {array1 && array1.map(a=>(<div>
                {/*{a}*/}


                {filter && filter.orderByCategory.filter(x => x.id === a).map(z=>(<div>

                    {/*<p style={{'paddingTop':'40px'}}>Filtered by  <b>{z.category}</b> category </p>*/}
                    {state1 === 'category' ?
                        <OrderByCategory filter={z.food}></OrderByCategory>

                        :
                        ''}
                    {/*{z.food.map(hrana=>(<div>{hrana.name}*/}

                    {/*</div>))}*/}


                </div>))}
            </div>))}

            {state1 === 'orderByName' ?

                <OrderBy filter={filter.orderByName}></OrderBy>
              :
                ''}


            {state1 === 'score' ?
                <OrderBy filter={filter.orderByScore}></OrderBy>

                :
                ''}

            {state1 === 'sale' ?

                <OrderBy filter={filter.orderBySale} proba={'1'} nizAkcija={nizAkcija}></OrderBy>

                :
                ''}


            <div>{search2 && search2.map(d=>(<div>
                {state1 === 'search' ?


                    <OrderBySearch id={d.id} name={d.name} image={d.image} ></OrderBySearch>

                    :
                    ''}

            </div>))}
            </div>

            {/*{state1 === 'category' ?*/}
            {/*    <OrderBy filter={filter.orderByCategory}></OrderBy>*/}

            {/*    :*/}
            {/*    ''}*/}


            {state1 === 'restorani' ?

            <Row xs={1} md={2} className="g-3">

                {restaurants.length && restaurants.map((restaurant, idx) => {

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
                                            backgroundImage: `url(${restaurant.image})`
                                        }} >

                                        <h1 style={{
                                            'text-align': 'center',
                                            ' font-size': '28px',
                                            'line-height': '1.2',
                                            'font-weight': '400',
                                            'color': '#fff',
                                            margin: '0',
                                            padding: '0 8px',
                                            'text-shadow': '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
                                            top: '0',
                                            'z-index': '1',
                                            width: '100%',
                                            height: '150px',
                                            'display': 'flex',
                                            'flex-direction': 'column',
                                            'align-items': 'center',
                                            'justify-content': 'center',
                                            'style': 'bold',
                                            'font-size': '55px',
                                        }}>


                                            <Link to={`/restaurants/${restaurant.id}`}
                                                  style={{'text-decoration': 'none', 'color': 'white'}}>
                                                <p style={{'text-decoration': 'none', 'font-family': 'serif'}}>{restaurant.name}</p>
                                            </Link>
                                        </h1>
                                    </Card.Title>

                                    <Card.Text>
                                        {restaurant && restaurant.categories.slice(0, 2).map((c) => (
                                            <p style={{
                                                'height': '30px',
                                                'width': '80px',
                                                'background-color': '#003312',
                                                'border-radius': '30%',
                                                'display': 'inline-block',
                                                'margin-left': '10px',
                                                'box-shadow': '0 2px 8px rgba(0, 0, 0, 0.25)',
                                                'color': 'white',
                                                'text-align': 'center'
                                            }}>   {c.category}</p>
                                        ))}
                                        {/*<img  style={{'float':'right',"width":"35px"}}   src="https://o.remove.bg/downloads/2d1fa20e-8b15-42ef-b16a-db433da4932f/590-5903480_red-heart-with-ochre-outline-clip-art-love-removebg-preview.png" />*/}




                                        {restaurant.users.filter(f => f.id === users).map(f => f.pivot.watchlist) < 1  ?

                                            <FcLikePlaceholder onClick={() => addFavoriteRestaurant(restaurant.id)}
                                                               style={{
                                                                   'float': 'right',
                                                                   "width": "35px",
                                                                   "margin-top": '20px',
                                                                   'margin-right': '10px'
                                                               }} size={40}/>

                                            :

                                            <FcLike onClick={() => deleteFavoriteRestaurant(restaurant.id)} style={{
                                            'float': 'right',
                                            "width": "35px",
                                            "margin-top": '20px',
                                            'margin-right': '10px'
                                        }} size={40}/>
                                                              }

                                        <br/>  <p style={{
                                        'padding-left': '15px',
                                        'color': 'rgb(171 163 163)',
                                        'font-family': 'serif',
                                        'font-style': 'italic',
                                    }}>{restaurant.description}</p>
                                        <hr style={{'margin': 'o'}}/>
                                        <div className="row">
                                            {/*    <FaStar />*/}
                                            <p style={{
                                                'padding-left': '15px',
                                                'color': 'rgb(171 163 163)',
                                                'margin-bottom': '0',
                                                'font-size': '14px'
                                            }}>



                                            Score:    {parseFloat(restaurant.users.reduce((a,v)=>a=a+v.pivot.score,0)/restaurant.users.length).toFixed(2)}

                                                </p>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>

                : ""}

            {restaurants && restaurants.map(restaurant => (
                <div>


                    {restaurant.food.map((f) => (
                        <div>

                            <div>


                                {/*//Kategorije*/}
                                {/*                                {f.categories && f.categories.map((data, index) => {*/}
                                {/*                                    if (duplicateCheck.includes(data.id))*/}
                                {/*                                        return null;*/}
                                {/*                                    duplicateCheck.push(data.id);*/}
                                {/*                                    return(*/}
                                {/*                                        <div>{data.category}*/}
                                {/*                                            {data.food.map((fo)=>(*/}
                                {/*                                                <div>{fo.name}</div>*/}
                                {/*                                            ))}*/}
                                {/*                                        </div>*/}

                                {/*                                    );*/}
                                {/*                                }).filter((e) => (e))*/}
                                {/*                                }*/}
                            </div>

                        </div>
                    ))}

                    <div>

                        {/*<CartProvider>*/}
                        {/*    <Modal   className={classes1.modal} isOpen={modalIsOpen} onRequestClose={() =>  window.location.reload(false)}>*/}


                        {/*        <RestaurantData idr={modalData.id} nameRestoran={modalData.name} phone={modalData.phone} location={modalData.location} email={modalData.email} workingHours={modalData.working_hours}></RestaurantData>*/}
                        {/*        <hr/>*/}

                        {/*        <Row xs={1} md={3} className="g-3">*/}
                        {/*            {modalData.food?.map((f,z)=>{*/}

                        {/*                return (*/}
                        {/*                    <Col key={z}>*/}

                        {/*                        <Hrana image={f.image} name={f.name} price={f.price} id={f.id} restoranId={modalData.id} food={f.ingredients}></Hrana>*/}

                        {/*                        /!*<Hrana image={f.image} name={f.name} price={f.price} id={f.id} restoranId={modalData.id} ingredients={f.ingredients}></Hrana>*!/*/}
                        {/*                    </Col>*/}
                        {/*                )*/}

                        {/*            })}*/}
                        {/*        </Row>*/}
                        {/*        /!*</CartProvider>*!/*/}

                        {/*        <p    onClick={() => {*/}

                        {/*            setModalIsOpen2(true)*/}
                        {/*        }}>Active orders {modalData.name} Restaurant </p>*/}


                        {/*        /!*<Modal className={classes1.modal}   isOpen={modalIsOpen1} onRequestClose={() => setModalIsOpen1(false)}>*!/*/}
                        {/*        /!*    <div>*!/*/}

                        {/*        /!*            <Cart></Cart>*!/*/}


                        {/*        /!*    </div>*!/*/}
                        {/*        /!*</Modal>*!/*/}

                        {/*        <Modal className={classes1.modal}   isOpen={modalIsOpen2} onRequestClose={() => setModalIsOpen2(false)}>*/}
                        {/*            <div>*/}

                        {/*                Active orders*/}
                        {/*                <hr/>*/}

                        {/*                <ActiveOrders></ActiveOrders>*/}

                        {/*            </div>*/}
                        {/*        </Modal>*/}


                        {/*        <p    onClick={() => {*/}

                        {/*            setModalIsOpen3(true)*/}
                        {/*        }}>All orders {modalData.name} Restaurant </p>*/}

                        {/*        <Modal  isOpen={modalIsOpen3} onRequestClose={() => setModalIsOpen3(false)}>*/}
                        {/*            <div>*/}

                        {/*                All orders*/}
                        {/*                <hr/>*/}

                        {/*                <AllOrders></AllOrders>*/}

                        {/*            </div>*/}
                        {/*        </Modal>*/}

                        {/*    </Modal>*/}
                        {/*</CartProvider>*/}
                    </div>

                </div>

            ))}

        </div>

    );

}

