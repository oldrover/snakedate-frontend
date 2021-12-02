import { useState } from "react";


export const LoginForm = (props) => {

    const login = {
        'email': '',
        'password': ''
    }  
    
    let jwt = '';

    const [loginData, setLoginData] = useState(login);
    

    const handleEmailChange = (e) => {
        setLoginData({...loginData, email: e.target.value});
    }

    const handlePasswordChange = (e) => {
        setLoginData({...loginData, password: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'               
             },
            body: JSON.stringify(loginData)
        };  
                
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

    return (
        <div className='LoginForm'>
            <div className='FormBody'>
                <form className='Form' onSubmit={handleSubmit}>
                    <label htmlFor='email'>Email:</label>
                    <input 
                        id='email' 
                        value={loginData.email}
                        onChange={handleEmailChange}
                    />
                    <label htmlFor='password'>Password:</label>
                    <input 
                        type='password' 
                        id='password' 
                        value={loginData.password}
                        onChange={handlePasswordChange}
                    />
                    <button type="submit" >
                        Login
                    </button>  
                </form>
            </div>            
        </div>
    )

}