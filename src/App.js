import './App.css';
import React, { useState, useEffect } from 'react';

import { Navigation } from './components/Navigation/Navigation';
import { Calendar } from './components/Calendar/Calendar';
import { Dashboard } from './components/Dashboard/Dashboard';
import { LoginForm } from './components/Forms/LoginForm';
import { Loading } from './components/Loading';

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
    
    if(isLoggedIn){    
      const fetchSnakes = async() => {
        const requestOptions = {
          method: 'GET',
          mode: 'cors',
          headers: { 
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': user.jwt               
          }      
        };      
        
        await fetch(`/api/snakes/${user.id}`, requestOptions)    
        .then(response => response.json())
        .then(data => { 
          user.snakes = data;
          setSnake(data[0]);           
          setIsLoading(false);                    
        }) 
        .catch(error =>{
          console.log(error);
        }); 
      }      
      fetchSnakes();
    }
    
  }, [user, isLoggedIn, isLoading]);
  

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
      <Loading />      
      );
  }  

  return (    
    <div className='App'>
      <Navigation 
        user={user} 
        snake={snake} 
        setSnake={setSnake}
        setIsLoading={setIsLoading}
      /> 
      <div className='Wrapper'>  
        <Dashboard snake={snake}/>   
        <Calendar 
          user={user} 
          snake={snake}
        />        
      </div>              
    </div>
    );  
}

export default App;
