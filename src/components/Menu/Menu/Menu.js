import { useState } from 'react';

import './Menu.css';
import { ChangeSnake } from '../ChangeSnake/ChangeSnake';
import { MenuItem } from '../MenuItem/MenuItem';
import { menuItems } from '../MenuStrucuture';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

export const Menu = (props) => {

    const {user, snake, setSnake, handleShowForm} = props;
    const [showMenu, setShowMenu] = useState(false);
    const [smallMenu, setSmallMenu] = useState(false);

    
    const showCollapsedMenu = () => {
        showMenu ? setShowMenu(false) : setShowMenu(true);
    }

    const handleSetSmallMenu = () => {
        smallMenu ? setSmallMenu(false) : setSmallMenu(true);
    }

    return(
        <div className={(!smallMenu && 'menu') || 'menu small_menu'}>
            <ChangeSnake
                user={user}
                snake={snake}
                setSnake={setSnake}
                handleShowForm={handleShowForm}
            />
            <div className='menu_collapsed'
                onClick={showCollapsedMenu}
            >
                <FontAwesomeIcon icon={(showMenu && faMinus) || faPlus}/>
            </div>
            { 
            <div className={(showMenu && 'menu_items' )|| 'menu_items is_collapsed'}>
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
            }             
            <div 
                className='button_small_menu'
                onClick={()=> handleSetSmallMenu()}
            >
                <FontAwesomeIcon icon={(!smallMenu && faAngleDoubleLeft) || faAngleDoubleRight} />
            </div>     
            
        </div>
    )

}