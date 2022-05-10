import './AlertBox.css';

export const AlertBox = (props) => {
    
    const {message, yesFunc, noFunc} = props;

    return (
        <div className='details alert_box'>            
            <p className='message'>{message}</p>
            <div className='btn_container'>            
                <button 
                    className='btn_yes'
                    onClick={() => yesFunc()}
                >
                    Ja
                </button>
                <button 
                    className='btn_no'
                    onClick={() => noFunc()}
                >
                    Nein
                </button>
            </div>

        </div>
    )
}