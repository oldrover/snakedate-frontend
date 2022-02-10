import './App.css';
import React, { useState, useEffect } from 'react';

import { Navigation } from './components/Navigation/Navigation';
import { Calendar } from './components/Calendar/Calendar';
import { Dashboard } from './components/Dashboard/Dashboard';
import { LoginPage } from './components/Login/LoginPage';
import { Loading } from './components/Loading/Loading';

const User = {
  id: '',
  name: '',
  snakes: [],
  image: '',
  jwt:''
}

const Snake = {
  snakeId: '',
  ownerId: '',
  name: '',
  species: '',
  sex: '',
  birthYear: null,
  weight: null,
  size: null,
  image: ''
}

function App() {
  
  const [user, setUser] = useState(User);
  const [snake, setSnake] = useState(Snake);
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
          (data.length > 0) && setSnake(data[0]);           
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
      <LoginPage 
        handleLogin={handleLogin}         
        setUser={setUser}
        setIsLoading={setIsLoading}
      />      
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
        setIsLoggedIn={setIsLoggedIn}
      /> 
      <div className='wrapper'>  
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
