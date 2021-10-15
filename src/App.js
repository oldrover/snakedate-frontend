import './App.css';
import React, { useState } from 'react';

import Navigation from './components/Navigation/Navigation';
import { Calendar } from './components/Calendar/Calendar';
import Dashboard from './components/Dashboard/Dashboard';

const snakes = [{
  species:'Kornnatter',
  name: 'Kratos',
  weight: 500,
  size: 145,
  image: ''
},
{ species: 'Kornnatter',
  name: 'Raziel',
  weight: 400,
  size: 120,
  image: ''
}
]

const User = {
  name: 'Sabine',
  snakes: snakes,
  image: ''
}

function App() {

  const [user] = useState(User);
  const [snake] = useState(User.snakes[0]);
  

  return (
    <div className='App'>
      <Navigation user={user}/> 
      <div className='Wrapper'>  
        <Dashboard snake={snake}/>   
        <Calendar />        
      </div>      
    </div>
  );
}

export default App;
