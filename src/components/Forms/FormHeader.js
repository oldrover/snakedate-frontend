import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export const FormHeader = (props) => {

    const text = props.text;
    const handleClose = props.handleClose;

    return (
        <div className='form_header'>
            <h2>{text}</h2>
            <button className='button_close' onClick={handleClose}>
                <FontAwesomeIcon icon={faTimesCircle} />            
            </button>

            </div>
    )
    
}