import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext()


export default function FavoritesProvider({children}){

    const [favorites, setFavorites] = useState([])


    const addFavorites = (info) =>{
        setFavorites([...favorites, info])
    }
   
    return(
        <FavoritesContext.Provider value={{favorites, addFavorites}}>
            {children}
        </FavoritesContext.Provider>
    )
}

// hook para utilizar

export const useFavoritesContext = () => useContext(FavoritesContext)