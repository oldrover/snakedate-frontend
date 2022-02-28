import './Menu.css';
import { ChangeSnake } from '../ChangeSnake/ChangeSnake';
import { MenuItem } from '../MenuItem/MenuItem';
import { menuItems } from '../MenuStrucuture';

export const Menu = (props) => {

    const user = props.user;
    const snake = props.snake;
    const setSnake = props.setSnake;

    return(
        <div className='menu'>
            <ChangeSnake
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