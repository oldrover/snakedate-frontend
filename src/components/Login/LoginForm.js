import { useState } from "react";


export const LoginForm = (props) => {

    const login = {
        'email': '',
        'password': ''
    }      
    
    let jwt = '';

    const setUser = props.setUser;
    const handleLogin = props.handleLogin;
    const setIsLoading = props.setIsLoading;

    const [loginData, setLoginData] = useState(login);
    const [showSignUp, setShowSignUp] = useState(false);

    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'               
         },
        body: JSON.stringify(loginData)
    };    

    const handleChange = (e) => {
        setLoginData({...loginData, [e.target.name]: e.target.value});
    }

    const handleShowClick = (e) => {
        e.target.value === 'login' ? setShowSignUp(false) : setShowSignUp(true);
    }

    const loginRequest = () => {
        setIsLoading(true);
        fetch(`/api/users/login`, requestOptions)  
            .then(response => {                  
                jwt = response.headers.get('Authentication');              
                return response.json();  
            })    
            .then(data => {                
                setUser({
                    id: data.id,
                    name: data.email,
                    snakes: [],
                    image: '',
                    jwt:jwt  
                })                
                handleLogin();
            })                                      
            .catch(error => alert('Credential Error please try again'));
    }

    const signUpRequest = () => {
        

        fetch(`/api/users`, requestOptions)  
            .then(response => { 
                return response.json();  
            })    
            .then(data => {
                alert(data);
                setShowSignUp(false);
            })                                     
            .catch(error => alert('SignUp Error please try again'));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        showSignUp ? signUpRequest() : loginRequest();
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
                <form className='login_form_form' onSubmit={handleSubmit}>
                    
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