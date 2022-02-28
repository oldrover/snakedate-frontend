import './Menu.css';
import { NavSnake } from '../../Navigation/NavSnake';
import { MenuItem } from '../MenuItem/MenuItem';

export const Menu = (props) => {

    const user = props.user;
    const snake = props.snake;
    const setSnake = props.setSnake;

    const menuItems = ['Alarme', 'Diagramme'];

    return(
        <div className='menu'>
            <NavSnake
                user={user}
                snake={snake}
                setSnake ={setSnake} 

            />
            {
                menuItems.map(item => {
                    return(
                        <MenuItem 
                            item={item}
                        />
                    )
                })
                
            }
            
        </div>
    )

}