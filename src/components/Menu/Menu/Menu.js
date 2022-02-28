import './Menu.css';
import { ChangeSnake } from '../ChangeSnake/ChangeSnake';
import { MenuItem } from '../MenuItem/MenuItem';
import { menuItems } from '../MenuStrucuture';

export const Menu = (props) => {

    const user = props.user;
    const snake = props.snake;
    const setSnake = props.setSnake;
    const handleShowForm = props.handleShowForm;

    return(
        <div className='menu'>
            <ChangeSnake
                user={user}
                snake={snake}
                setSnake={setSnake}
                handleShowForm={handleShowForm}
            />
            {
                menuItems.map(item => {
                    return(                        
                        <MenuItem                             
                            item={item}
                            key={item.name}
                        />
                    )
                })
                
            }
            
        </div>
    )

}