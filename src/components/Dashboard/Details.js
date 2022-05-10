import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { deleteSnake, resetSnakes } from '../../app/features/snakes/snakeSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPen } from '@fortawesome/free-solid-svg-icons';
import { Inactive } from '../Inactive';
import { AlertBox } from '../AlertBox/AlertBox';

export const Details = (props) => {
    
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const [showBox, setShowBox] = useState(false);
    const {snake, handleShowForm} = props;  
    let imgSrc = snake.image || 'images/snake_S.jpg';


    const handleDelete = () => {
        dispatch(deleteSnake({snake: snake, jwt: user.jwt}));        
        handleShowBox();
        dispatch(resetSnakes());
    }
    
    const handleClick = (action) => {
        action === 'delete' && handleShowBox(); 
        action === 'edit' && handleShowForm(true, {formType: 'edit_snake'});
    }

    const handleShowBox = () => showBox ? setShowBox(false) : setShowBox(true);
    
        
    return (
            <div className='details'>                
                <div className='details_row'>
                    <div className='fact'>
                        <div className='fact_title'>Name:</div> {snake.name}
                    </div>
                    <div  className='fact'>
                    <div className='fact_title'>Spezies:</div> {snake.species}
                    </div>
                    <div  className='fact'>
                    <div className='fact_title'>Geschlecht:</div> {snake.sex}
                    </div>
                </div><div  className='details_row'>
                    <div  className='fact'>
                    <div className='fact_title'>Geburtsjahr:</div> {snake.birthYear}
                    </div>
                    <div  className='fact'>
                    <div className='fact_title'>aktuelles Gewicht:</div> {snake.weight}g
                    </div>
                    <div  className='fact last'>
                    <div className='fact_title'>aktuelle Größe:</div> {snake.size}cm
                    </div>
                </div>
                <div className='fact_image'>
                    <img src={imgSrc} alt='snake' />                
                </div>
                <div className='details_buttons'>
                    <button 
                        className='btn_del_edit' 
                        onClick={() => handleClick('edit')}
                    >
                            <FontAwesomeIcon icon={faPen}/>
                    </button>
                    <button 
                        className='btn_del_edit' 
                        onClick={() => handleClick('delete')}                        
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>  
                { snake.id === '' && <Inactive /> }   
                {
                showBox && 
                    <AlertBox 
                        message={`${snake.name} wirklich löschen?`}
                        yesFunc={handleDelete}
                        noFunc={handleShowBox}
                    />
                }               
            </div> 
            
        );    
}


