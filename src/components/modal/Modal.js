import './Modal.css';
import { useSelector } from 'react-redux';


export const Modal = () => {  
    
    const text = useSelector(state => state.modal.text);
    const show = useSelector(state => state.modal.show);

    return(        
        <div className={(show && 'modal show') || 'modal hide'}>{text}</div>
    )
}