import { useState } from 'react';

import { NavSnake } from './NavSnake';
import { NavUser } from './NavUser';
import { ShowForm } from '../Forms/ShowForm';


export const Navigation = (props) => {      
    
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState();  

    const handleShowForm = (show, form) => {
        setFormData(form);
        setShowForm(show);
    }

        return (
            <div className="Navigation">
                <NavSnake 
                    user={props.user} 
                    snake={props.snake}
                    setSnake={props.setSnake} 
                    handleShowForm={handleShowForm}                    
                /> 
                <NavUser 
                    user={props.user} 
                /> 

                { showForm && 
                <ShowForm 
                    formData={formData}                    
                    handleShowForm={handleShowForm}
                    setIsLoading={props.setIsLoading}                     
                    user={props.user}
                /> 
                } 
            </div>
        ); 

}
