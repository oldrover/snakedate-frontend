import './App.css';
import React, { useState, useEffect } from 'react';

import { Navigation } from './components/Navigation/Navigation';
import { Calendar } from './components/Calendar/Calendar';
import { Dashboard } from './components/Dashboard/Dashboard';
import { LoginForm } from './components/Forms/LoginForm';

const User = {
  id: '',
  name: '',
  snakes: [],
  image: '',
  jwt:''

}

function App() {
  
  const [user, setUser] = useState(User);
  const [snake, setSnake] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);  

  useEffect(() => {   
    const requestOptions = {
      method: 'GET',
      mode: 'cors',
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': user.jwt               
       }      
    };  
    
    
    return fetch(`/api/snakes/${user.id}`, requestOptions)    
    .then(response => response.json())
    .then(data => {             
      setIsLoading(false);    
      user.snakes = data;
      setSnake(data[0]);      
    }) 
    .catch(error =>{
      console.log(error);
    }); 
  }, [user]); 

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  if(!isLoggedIn) {
    return (
        <div className='LoginPage'>
          <LoginForm handleLogin={handleLogin} setUser={setUser}/>  
        </div>
      )
  }

  if (isLoading){
    return(
      <div>...loading</div>
      
      );
  }  

  return (    
    <div className='App'>
      <Navigation user={user} snake={snake} setSnake={setSnake}/> 
        <div className='Wrapper'>  
          <Dashboard snake={snake}/>   
          <Calendar user={user} snake={snake}/>        
        </div>              
    </div>
    );  
}

export default App;
