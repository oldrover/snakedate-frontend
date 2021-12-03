import { LoginForm } from "./Forms/LoginForm"

export const LoginPage = (props) => {    
    
    return (
        <div className='LoginPage'>
            <LoginForm 
                handleLogin={props.handleLogin} 
                setUser={props.setUser}

            />  
        </div>
        
    )
}