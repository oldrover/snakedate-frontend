import { useOutletContext } from 'react-router-dom';

import { Dashboard } from '../components/Dashboard/Dashboard';

export const DashboardRoute = () => {

    const [user, snake, handleShowForm, setIsLoggedIn, setSnake] = useOutletContext(); 

    return (        
            <Dashboard                 
                user={user}
                snake={snake}
                setSnake={setSnake}
            />      
    )
}