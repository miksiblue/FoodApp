import React, {useEffect, useState} from "react";

export const ProbaContext=React.createContext();

export const ProbaProvider= (props) => {

    // const [ime,setIme] = useState('isprobavanoasjdohjefnijablsdnadsdas');

    const [ordersActive, setOrdersActive] = useState('');




    useEffect(() => {
        let isMounted = true;
        fetch(route('activeOrders'))
            // fetch('http://192.168.31.230/api/v1/restaurants/')

            .then(res => {
                return res.json()
            })
            .then(data => {
                if (isMounted)      setOrdersActive(data);
            })

        return () => { isMounted = false };
    }, []);

    return(
        <ProbaContext.Provider value={[ordersActive,setOrdersActive]}>
            {props.children}
        </ProbaContext.Provider>
    )

}
