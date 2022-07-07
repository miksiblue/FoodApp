import React, {useEffect, useState} from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function PageForTest() {
    const key=44;

    const [sredina,setSredina]=useState('');
    console.log('sredina',sredina)
    const [svaHrana, setFood]=useState({
        food:[],
        proba:'',

    });

    const [foodInput, setFoodInput]=useState({
       name:'Burger'

    });


    const [svaHranaBackend,setFoodCategory]=useState([]);


    const [trenutno,setTrenutno]=useState([]);

    const [array1,setArray1]=useState([]);

    const [l,setL]=useState([]);


    useEffect(() => {

        let isMounted = true;

        fetch('http://127.0.0.1:8000/api/v1/proba')
            // fetch('http://127.0.0.1:8000/api/v1/randomFood/')

            .then(res => {
                return res.json()

            })
            .then(data => {
                if (isMounted) setFood(data);
            })

        fetch('http://127.0.0.1:8000/api/v1/probaInput')
            // fetch('http://127.0.0.1:8000/api/v1/randomFood/')

            .then(res => {
                return res.json()

            })
            .then(data => {
                if (isMounted) setFoodInput(data);
            })


        fetch(`http://127.0.0.1:8000/api/v1/proba/${key}`)

            .then(res => {
                return res.json()

            })
            .then(data => {
                if (isMounted) setFoodCategory(data);
            })




        fetch(`http://127.0.0.1:8000/api/v1/sredina`)

            .then(res => {
                return res.json()

            })
            .then(data => {
                if (isMounted) setSredina(data);
            })





        fetch(`http://127.0.0.1:8000/api/v1/findLoginUser`)

            .then(res => {
                return res.json()

            })
            .then(data => {
                if (isMounted) setL(data);
            })

        return () => {
            isMounted = false
        };

    }, []);


    const postavi = (e,id) => {


        //ako zelimo da se ispise samo 1 stvar
      setTrenutno(id);

        //kad zelimo da izaberemo vise stvari
        array1.push(id);
        //kad je u frontendu automatski se ucitavaju informacije



    }

    const izbrisi = (e,id) => {

   setArray1(  array1.filter(item => item !== id))


    }



    return (
        <div>


           <p style={{'color':'red'}}>Frontend:</p>
            <div>
            {svaHrana && svaHrana.food.map(m=>(<div>
                {m.name}

                {array1.includes(m.id) ?   <p onClick={(e)=>izbrisi(e,m.id)}> Izbrisi</p> : <button onClick={(e)=>postavi(e,m.id)}>

                    Klikni   </button>}

            </div>))}

         bez push:   {trenutno}
            <br/>
          sa push:   {array1.map(a=>(<div>{a}</div>))}
            </div>

            <br/>
         <p style={{'color':'red'}}> Backend key</p>

            <div>
                {svaHranaBackend && svaHranaBackend.map(z=>(<div>
                    {z.name}
                </div>))}
            </div>

            <p style={{'color':'red'}}>Backend input </p>
            <div>

                <input type="text" name='name' value={foodInput.name}/>

                {foodInput.id}
               {/*Food input: {foodInput.map(f=>f.name)}*/}
            </div>
        </div>
    );
}
