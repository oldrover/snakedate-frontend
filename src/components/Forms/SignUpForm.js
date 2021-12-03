export const SignUpForm = (props) => {
/*
    const signUp = {
        'email': '',
        'password': ''
    }  

    const [signUpData, setSignUpData] = useState(signUp);
    

    const handleChange = (e) => {
        setSignUpData({...signUpData, [e.target.name]: e.target.value});
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
        <div className='AllForms LoginForm'>
            <div className='FormBody'>
                <form className='Form' onSubmit={handleSubmit}>
                    <label htmlFor='email'>Email:</label>
                    <input 
                        id='email'
                        name='email' 
                        size='25'
                        value={loginData.email}
                        onChange={handleChange}
                        autoFocus
                    />
                    <label htmlFor='password'>Password:</label>
                    <input 
                        type='password' 
                        id='password' 
                        name='password'
                        size='25'
                        value={loginData.password}
                        onChange={handleChange}
                    />
                    <label htmlFor='password'>Password:</label>
                    <input 
                        type='password' 
                        id='password' 
                        name='password'
                        size='25'
                        value={loginData.password}
                        onChange={handleChange}
                    />
                    <button type="submit" >
                        Login
                    </button>  
                </form>
            </div>            
        </div>
    )
    */
    }