import './App.css';
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSnakes, resetSnakeMessage } from './app/features/snakes/snakeSlice';
import { showModal, hideModal } from './app/features/modal/modalSlice';
import { resetEventMessage } from './app/features/events/eventSlice';
import { logoutUser } from './app/features/user/userSlice';


import { Navigation } from './components/Navigation/Navigation';
import { LoginPage } from './components/Login/LoginPage';
import { Loading } from './components/Loading/Loading';
import { Menu } from './components/Menu/Menu/Menu';
import { ShowForm } from './components/Forms/ShowForm';
import { Location } from './components/Location/Location';
import { Modal } from './components/modal/Modal';

function App() {
  
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);  
  const snake = useSelector(state => state.snake.chosenSnake); 
  const snakeStatus = useSelector(state => state.snake.status);   
  const snakeError = useSelector(state => state.snake.error); 
  const eventsError = useSelector(state => state.event.error); 
  const eventMessage = useSelector(state => state.event.message);
  const snakeMessage = useSelector(state => state.snake.message);
  const [showForm, setShowForm] = useState(false);  
  const [formData, setFormData] = useState();  

  useEffect(() => { 

    const handleModal = (text) => {
      (text === 'SyntaxError') && dispatch(logoutUser());
      dispatch(showModal(text));
      setTimeout(() => (dispatch(hideModal())), 2000); 
      dispatch(resetEventMessage());
      dispatch(resetSnakeMessage());     
    }
    
    if(user.status === 'succeeded' && snakeStatus === 'idle'){ 
      dispatch(fetchSnakes({userId: user.id, jwt: user.jwt}));             
    } 

    (snakeError || eventsError) && handleModal(snakeError || eventsError);    
    (eventMessage || snakeMessage) && handleModal(eventMessage || snakeMessage);
    
  }, [user, snake, snakeStatus, snakeError, eventsError, eventMessage, snakeMessage, dispatch]);

  
  
   
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
      <Modal />
    </div>
    );  
}

export default App;
