import React, {useState} from "react";

export const FavoriteRestaurantContext=React.createContext();

export const FavoriteRestaurantProvider= (props) => {

    const [favoriteRestaurant,setFavoriteRestaurant] = useState([]);

    return(
        <FavoriteRestaurantContext.Provider value={[favoriteRestaurant,setFavoriteRestaurant]}>
            {props.children}
        </FavoriteRestaurantContext.Provider>
    )

}
