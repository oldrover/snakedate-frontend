import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetSnakes, saveSnake } from '../../app/features/snakes/snakeSlice';

import { FormHeader } from './FormHeader';


export const SnakeForm = (props) => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const snake = useSelector(state => state.snake.chosenSnake);
    const {handleClose, action} = props;

    let defaultData = {        
        'ownerId': user.id, 
        'name': '',
        'species': '',
        'sex': 'male',
        'birthYear': 2010,
        'weight': 0,
        'size': 0, 
        'image': ''    
    }
    
    let text = 'Neue Schlange anlegen';

    if(action === 'edit'){
        defaultData = snake;
        text = 'Schlange bearbeiten';
    }

    const [snakeData, setSnakeData] = useState(defaultData);
    
    


    const handleSubmit = (e) => {       
        e.preventDefault();         
        dispatch(saveSnake({snake: snakeData, jwt: user.jwt}))
        handleClose();
        dispatch(resetSnakes());
    }

    const handleChange = (e) => {        
        setSnakeData({...snakeData, [e.target.name]: e.target.value});
    }

    return (
        <div className='all_forms snake_form'> 
            <FormHeader 
                handleClose={handleClose} 
                text={text}
            />
             <div className='form_body'>
                <form className='form' onSubmit={handleSubmit}>
                    <label htmlFor='name'>Name:</label>
                    <input 
                        id='name' 
                        name='name' 
                        value={snakeData.name}
                        onChange={handleChange}
                    />
                    <label htmlFor='species'>Art:</label>
                    <input 
                        id='species'
                        name='species' 
                        value={snakeData.species}
                        onChange={handleChange}
                    />
                    <label htmlFor='select_sex'>Geschlecht:</label>
                    <select 
                        id='select_sex' 
                        value={snakeData.sex} 
                        onChange={handleChange}>
                        <option value='female'>weiblich</option>
                        <option value='male'>männlich</option>                        
                    </select>
                    <label htmlFor='birth_year'>Geburtsjahr:</label>
                    <input 
                        id='birth_year'
                        name='birthYear'
                        type='number'
                        value={snakeData.birthYear}  
                        onChange={handleChange} 
                    />
                    <label htmlFor='weight'>Gewicht:</label>
                    <input 
                        id='weight'
                        name='weight'
                        type='number'
                        value={snakeData.weight}  
                        onChange={handleChange}
                    />
                    <label htmlFor='size'>Größe:</label>
                    <input 
                        id='size'
                        name='size'
                        type='number' 
                        value={snakeData.size} 
                        onChange={handleChange}
                    /> 
                    <div className="button_container">
                        <button type='submit'>
                            save
                        </button>
                    </div>
                 </form>
            </div>
            <div className='form_footer'></div>
        </div>
    )

}