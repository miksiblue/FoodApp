import React, {useContext, useState, useRef, useEffect} from "react";
import {useForm} from "@inertiajs/inertia-react";
import Button from "@/Components/Button";

export default function Display(props) {

    const [user, setUser] = useState('');

    useEffect(() => {
        let isMounted = true;
        fetch(route('findUser'))
            // fetch('http://192.168.31.230/api/v1/restaurants/')
            // fetch('http://192.168.31.230/api/v1/restaurants/')

            .then(res => {
                return res.json()
            })
            .then(data => {
                if (isMounted)      setUser(data);
            })

        return () => { isMounted = false };
    }, []);


    const {name, setCount, phone, count,address,food_id} = useContext(props.NumberContext);
    const [inputValue, setInputValue] = useState("");
console.log(name);
    const {data, setData, post, processing, errors, reset} = useForm({
        // name: name,
        // phone: '1212',
        address:'drvarska 1',
        user_id:1,
        food:food_id,


    });




    const [newName, setNewName] = useState("");
    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
        // setData(event.target.name =);
    };

    const onClick = () => {

        setCount(newName);
        post(route('restaurants'));
    };
    const submit = (e) => {
        e.preventDefault();

        post(route('orders'));
        // post('http://192.168.31.230/api/v1/restaurants/');
    };

    // const {name, phone, count} = useContext(props.NumberContext);
    // Use the Consumer to grab the value from context
    // Notice this component didn't get any props!
    const value = useContext(props.NumberContext);
    // const proba = useContext(props.NumberContext.count);
    const burger = 'burger'
    return (
        <div>
            <form onSubmit={submit}>
                <div>

                    {/*<input*/}
                    {/*    type="text"*/}
                    {/*    name='name'*/}
                    {/*    value={data.name}*/}
                    {/*    handleChange={onHandleChange}*/}
                    {/*/>*/}


                    {/*<input*/}
                    {/*    type="text"*/}
                    {/*    name='phone'*/}
                    {/*    value={data.phone}*/}
                    {/*    handleChange={onHandleChange}*/}
                    {/*/>*/}
                    {/*Address*/}
                    {/*<input*/}
                    {/*    type="text"*/}
                    {/*    name='address'*/}
                    {/*    value={data.address}*/}
                    {/*    handleChange={onHandleChange}*/}
                    {/*/><br/>*/}
                    {/*User id*/}
                    {/*<input*/}
                    {/*    type="text"*/}
                    {/*    name='user_id'*/}
                    {/*    value={data.user_id}*/}
                    {/*    handleChange={onHandleChange}*/}
                    {/*/>*/}
<br/>
                    Food id
                    <input
                        type="text"
                        name='food[1]'
                        value={data.food}
                        handleChange={onHandleChange}
                    />


                    {/*<h1>Render Count: {count.current}</h1>*/}

                </div>


                {/*You orderd {name},{phone} .*/}

                <Button className="ml-4">
                    ORDER
                </Button>
                </form>

            {/*<div>*/}
            {/*    <input type="text" value={data.name} />*/}
            {/*    <button onClick={()=>name(data.name))}>add</button>*/}
            {/*    /!*<input type="button" value="Change Name" onClick={onClick} />*!/*/}
            {/*</div>*/}
        </div>
);
}
