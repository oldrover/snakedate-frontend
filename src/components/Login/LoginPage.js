import { LoginForm } from "./LoginForm"

let imgSrc = 'images/snake_M.jpg';

export const LoginPage = (props) => {
    
    const handleLogin = props.handleLogin;
    const setUser = props.setUser;
    const setIsLoading = props.setIsLoading;
    
    return (
        <div className='login_page'>
            <div className='login_headline'>
                SnakePlanner
            </div>
            <div className='login_wrapper'>                
                <div className='login_img'>
                    <img src={imgSrc} alt='Snake' />
                </div>
                <LoginForm 
                    handleLogin={handleLogin} 
                    setUser={setUser}
                    setIsLoading={setIsLoading}

                />  
            </div>
        </div>
        
    )
}