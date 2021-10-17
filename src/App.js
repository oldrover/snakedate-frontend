import './App.css';
import React, { useState } from 'react';

import { Navigation } from './components/Navigation/Navigation';
import { Calendar } from './components/Calendar/Calendar';
import { Dashboard } from './components/Dashboard/Dashboard';

const snakes = [{
  species:'Kornnatter',
  name: 'Kratos',
  sex: 'male',
  birthyear: 2010,
  weight: 500,
  size: 145,
  image: ''
},
{ species: 'Kornnatter',
  name: 'Raziel',
  sex: 'male',
  birthyear: 2019,
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
  const [snake, setSnake] = useState(User.snakes[0]);
 

  return (
    <div className='App'>
      <Navigation user={user} setSnake={setSnake}/> 
      <div className='Wrapper'>  
        <Dashboard snake={snake}/>   
        <Calendar />        
      </div>      
    </div>
  );
}

export default App;
