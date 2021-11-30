import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export const FormHeader = (props) => {
    return (
        <div className="FormHeader">
            <h2>{props.text}</h2>
            <button className="BtnClose" onClick={props.handleClose}>
                <FontAwesomeIcon icon={faTimesCircle} />            
            </button>

            </div>
    )
    
}