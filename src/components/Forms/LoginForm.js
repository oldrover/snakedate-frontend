import { useState } from "react";


export const LoginForm = (props) => {

    const login = {
        'email': '',
        'password': ''
    }  
    
    let jwt = '';

    const [loginData, setLoginData] = useState(login);
    const [showSignUp, setShowSignUp] = useState(false);
    

    const handleChange = (e) => {
        setLoginData({...loginData, [e.target.name]: e.target.value});
    }

    const handleShowClick = (e) => {
        e.target.value === 'login' ? setShowSignUp(false) : setShowSignUp(true);
    }

    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'               
         },
        body: JSON.stringify(loginData)
    }; 

    const loginRequest = () => {
        fetch(`/api/users/login`, requestOptions)  
            .then(response => {                  
                jwt = response.headers.get('Authentication');              
                return response.json();  
            })    
            .then(data => {                
                props.setUser({
                    id: data.id,
                    name: data.email,
                    snakes: [],
                    image: '',
                    jwt:jwt  
                })
                props.handleLogin();
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
        <div className='AllForms LoginForm'>
            <div className='FormHeader'>
                <button
                    value='login'
                    onClick={handleShowClick}
                >
                    Login
                </button>
                    
                <button
                     value='signup'
                     onClick={handleShowClick}
                >
                Sign up
                </button>
            </div>
            <div className='FormBody'>
                <form className='Form' onSubmit={handleSubmit}>
                    
                    <input 
                        id='email'
                        name='email' 
                        size='50'
                        autoFocus
                        placeholder='Email'
                        value={loginData.email}
                        onChange={handleChange}
                        
                    />                    
                    <input 
                        type='password' 
                        id='password' 
                        name='password'
                        size='50'
                        placeholder='Password'
                        value={loginData.password}
                        onChange={handleChange}

                    />
                    { showSignUp && (
                    
                    <input 
                        type='password' 
                        id='confirm' 
                        name='confirm'
                        size='50'
                        placeholder='Confirm password' 
                    />)}
                    <div className='ButtonContainer'>
                        <button type="submit" >
                            {(showSignUp && 'Sign up') || 'Login'}                        
                        </button> 
                    </div> 
                </form>
            </div>            
        </div>
    )

}