import { useOutletContext } from "react-router-dom";
import { Dashboard } from "../components/Dashboard/Dashboard";


export const DashboardRoute = () => {

    const [user, snake, handleShowForm] = useOutletContext(); 

    return (
        <div>
            <Dashboard 
                snake={snake}
            />
        </div>
    )
}