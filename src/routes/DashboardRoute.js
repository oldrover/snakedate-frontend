import { useOutletContext } from 'react-router-dom';

import { Dashboard } from '../components/Dashboard/Dashboard';

export const DashboardRoute = () => {

    const [handleShowForm] = useOutletContext();

    return (        
            <Dashboard 
                handleShowForm={handleShowForm}
            />      
    )
}