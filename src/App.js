import './App.css';
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSnakes } from './app/features/snakes/snakeSlice';

import { Navigation } from './components/Navigation/Navigation';
import { LoginPage } from './components/Login/LoginPage';
import { Loading } from './components/Loading/Loading';
import { Menu } from './components/Menu/Menu/Menu';
import { ShowForm } from './components/Forms/ShowForm';
import { Location } from './components/Location/Location';

function App() {
  
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);  
  const snake = useSelector(state => state.snake.chosenSnake); 
  const snakeStatus = useSelector(state => state.snake.status);    
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState();  

  useEffect(() => { 
    
    if(user.status === 'succeeded' && snakeStatus === 'idle'){ 
      dispatch(fetchSnakes({userId: user.id, jwt: user.jwt}));             
    }
    
  }, [user, snake, snakeStatus, dispatch]);
  
   
  const handleShowForm = (show, form) => {
    setFormData(form);
    setShowForm(show); 
  }

  if(user.status === 'idle') {
    return (      
      <LoginPage />      
      )
  }
  
  return (    
    <div className='App'>
      <Navigation /> 
      <div>
      <Menu         
        handleShowForm={handleShowForm}
      />
      </div>
      <div className='wrapper'>  
        { user.status !== 'succeeded' && snake.status !== 'succeeded' && <Loading />} 
        <Location />      
        <Outlet 
          context={[handleShowForm]}
        />  
      </div>
      {showForm && 
        <ShowForm 
          formData={formData}                    
          handleShowForm={handleShowForm}   
        /> 
      }
    </div>
    );  
}

export default App;
