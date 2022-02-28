import { useState } from 'react';
import { NavUser } from './NavUser';
import { ShowForm } from '../Forms/ShowForm';


export const Navigation = (props) => { 
    
    const user = props.user;   
    const setIsLoading = props.setIsLoading;
    const setIsLoggedIn = props.setIsLoggedIn;
    
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState();  

    const handleShowForm = (show, form) => {
        setFormData(form);
        setShowForm(show);
    }

        return (
            <div className='navigation'>
                {/*<NavSnake 
                    user={user} 
                    snake={snake}
                    setSnake={setSnake} 
                    handleShowForm={handleShowForm}                    
                /> */}
                <NavUser 
                    user={user} 
                    setIsLoggedIn={setIsLoggedIn}
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
