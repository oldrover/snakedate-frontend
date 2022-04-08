import { useOutletContext } from 'react-router-dom';

export const DashboardRoute = () => {

    const [user, snake, handleShowForm] = useOutletContext(); 

    return (        
            <div>this is the dashboard route</div>       
    )
}