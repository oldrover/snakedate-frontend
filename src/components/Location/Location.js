import { useLocation } from 'react-router-dom';
import './Location.css';

export const Location = () => {

    const pathDict = {
        home: 'Dashboard',
        calendar: 'Kalender',
        alarms: 'Alarme',
        statistics: 'Statistiken' 
    }

    const getPathName = (path) => {
        (path.toString() === '/') && (path = 'home');        
        return (pathDict[path.toString().replace('/', '')]);
    }

    const location = useLocation();

    return (
        <div className='location'>
            {getPathName(location.pathname)}
        </div>
    )

}