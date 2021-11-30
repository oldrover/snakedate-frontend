import './App.css';
import React, { useState, useEffect } from 'react';

import { Navigation } from './components/Navigation/Navigation';
import { Calendar } from './components/Calendar/Calendar';
import { Dashboard } from './components/Dashboard/Dashboard';

// Mock Data---------------------------------------------------------

const User = {
  id: 'bc0e3850-6fbc-4225-a120-daaa76f99ca7',
  name: 'Sabine',
  snakes: [],
  image: ''
}
//End of Mock Data --------------------------------------------------


function App() {
  
  const [user] = useState(User);
  const [snake, setSnake] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);  

  useEffect(() => {     
    return fetch(`/snakes/${User.id}`)    
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

  const handleClick = () => {
    setIsLoggedIn(true);
  }

  if(!isLoggedIn) {
    return (
        <div className='LoginPage'>
          <div className='LoginForm'>
            please log in
            <button onClick={handleClick}>Login</button>
          </div>
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
          <Calendar snake={snake}/>        
        </div>              
    </div>
    );  
}

export default App;
