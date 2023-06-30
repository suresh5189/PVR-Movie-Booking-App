import {createContext,useState} from "react";

const MovieCard = createContext();

const MovieContext = ({children}) => {

    const [seats,setSeats] = useState([]);

    const [occupied,setOccupied] = useState([]);

    const [ticket,setTicket] = useState([]);

    return(
        <MovieCard.Provider value={{seats,setSeats,occupied,setOccupied,ticket,setTicket}}>
            {children}
        </MovieCard.Provider>
    )
}

export {MovieCard,MovieContext};