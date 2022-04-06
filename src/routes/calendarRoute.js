import { useOutletContext } from "react-router-dom";

import { Calendar } from "../components/Calendar/Calendar";

export const CalendarRoute = () => {

    const [user, snake, handleShowForm] = useOutletContext(); 

    return( 
        <div>
            <Calendar
                user={user}
                snake={snake}
                handleShowForm={handleShowForm}
            />
        </div>

    )
}