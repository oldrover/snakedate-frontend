import './MenuItem.css';

export const MenuItem = (props) => {
    return (
        <div className='menu_item'>
            {props.item}
        </div>
    )
}