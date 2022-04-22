import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../app/features/user/userSlice';
import { userSignUp } from '../../utils/UserSignUp';


export const LoginForm = () => {

    const login = {
        'email': '',
        'password': ''
    }  

    const dispatch = useDispatch();  
    const [loginData, setLoginData] = useState(login);
    const [showSignUp, setShowSignUp] = useState(false);

    
    const handleChange = (e) => {
        setLoginData({...loginData, [e.target.name]: e.target.value});
    }

    const handleShowClick = (e) => {
        e.target.value === 'login' ? setShowSignUp(false) : setShowSignUp(true);
    }

    const signUpRequest = () => {  
        userSignUp(loginData);
        setShowSignUp(false);
    }

    const HandleSubmit = (e) => {
        e.preventDefault();        
        showSignUp ? signUpRequest() : dispatch(fetchUser(loginData));  
    }

    return (
        <div className='login_form'>            
            <div className='login_form_header'>
                <div className='login_form_header_buttons'>
                    <button
                        value='login'                        
                        onClick={handleShowClick}
                        className={(!showSignUp && 'active_button') || ''}
                    >
                    Einloggen
                    </button>
                        
                    <button
                        value='signup'
                        onClick={handleShowClick}
                        className={(showSignUp && 'active_button') || ''}
                    >
                    Anmelden
                    </button>
                </div>
            </div>
            <div className='login_form_body'>
                <form className='login_form_form' onSubmit={HandleSubmit}>
                    
                    <input 
                        className='login'
                        id='email'
                        name='email'                         
                        autoFocus
                        required
                        placeholder='Email-Adresse'
                        value={loginData.email}
                        onChange={handleChange}
                        
                    />  
                    <br />                  
                    <input
                        className='login'
                        type='password' 
                        id='password' 
                        name='password'                        
                        placeholder='Passwort'
                        required
                        value={loginData.password}
                        onChange={handleChange}

                    />
                    <br />
                    { showSignUp && (                    
                    
                    <input 
                        className='login'
                        type='password' 
                        id='confirm' 
                        name='confirm' 
                        required                       
                        placeholder='Passwort wiederholen' 
                    />)}
                    <div className='button_container'>
                        <button type="submit" className='login'>
                            {(showSignUp && 'Anmelden') || 'Einloggen'}                        
                        </button> 
                    </div> 
                </form>
            </div>            
        </div>
    )

}