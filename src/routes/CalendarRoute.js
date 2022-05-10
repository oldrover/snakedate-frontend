import { useOutletContext } from "react-router-dom";

import { Calendar } from "../components/Calendar/Calendar";

export const CalendarRoute = () => {

    const [handleShowForm] = useOutletContext(); 

    return(         
        <Calendar            
            handleShowForm={handleShowForm}           
        />   
    )
}