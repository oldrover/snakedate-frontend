import { useState } from 'react';

import { NavSnake } from './NavSnake';
import { NavUser } from './NavUser';
import { ShowForm } from '../Forms/ShowForm';


export const Navigation = (props) => { 
    
    const user = props.user;
    const snake = props.snake;
    const setSnake = props.setSnake;
    const setIsLoading = props.setIsLoading;
    
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState();  

    const handleShowForm = (show, form) => {
        setFormData(form);
        setShowForm(show);
    }

        return (
            <div className='navigation'>
                <NavSnake 
                    user={user} 
                    snake={snake}
                    setSnake={setSnake} 
                    handleShowForm={handleShowForm}                    
                /> 
                <NavUser 
                    user={user} 
                /> 

                { showForm && 
                <ShowForm 
                    formData={formData}                    
                    handleShowForm={handleShowForm}
                    setIsLoading={setIsLoading}                     
                    user={user}
                /> 
                } 
            </div>
        ); 

}
