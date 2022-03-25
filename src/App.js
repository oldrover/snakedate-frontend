import './App.css';
import React, { useState, useEffect } from 'react';

import { Navigation } from './components/Navigation/Navigation';
import { Calendar } from './components/Calendar/Calendar';
import { Dashboard } from './components/Dashboard/Dashboard';
import { LoginPage } from './components/Login/LoginPage';
import { Loading } from './components/Loading/Loading';
import { Menu } from './components/Menu/Menu/Menu';
import { ShowForm } from './components/Forms/ShowForm';

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
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState();   

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
          (data.length > 0 && snake.snakeId ==='') && setSnake(data[0]); 
        }) 
        .catch(error =>{
          console.log(error);
        }); 
      } 
          
      fetchSnakes();
      setIsLoading(false);
    }
    
  }, [user, isLoggedIn, isLoading, snake.snakeId]);
  

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  

  const handleShowForm = (show, form) => {
    setFormData(form);
    setShowForm(show);
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
        setIsLoading={setIsLoading}
        setIsLoggedIn={setIsLoggedIn}
      /> 
      <div>
      <Menu 
        snake={snake} 
        user={user}
        setSnake={setSnake}
        handleShowForm={handleShowForm}
      />
      </div>
      <div className='wrapper'>  
        
        
        <Calendar 
          user={user} 
          snake={snake}
          handleShowForm={handleShowForm}
        /> 
        <Dashboard           
          snake={snake}           
        />       
      </div>
      {showForm && 
        <ShowForm 
          formData={formData}                    
          handleShowForm={handleShowForm}
          setIsLoading={setIsLoading}   
          snake={snake}                  
          user={user}
        /> 
      }
    </div>
    );  
}

export default App;
