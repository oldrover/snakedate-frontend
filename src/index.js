import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './app/store';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { CalendarRoute } from './routes/calendarRoute';
import { AlarmRoute } from './routes/alarmRoute';
import { DashboardRoute } from './routes/dashboardRoute';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>   
        <Route  path='/' element ={<App />}> 
          <Route path='/' element={<DashboardRoute />} />
          <Route path='calendar' element={<CalendarRoute />} /> 
          <Route path='alarms' element={<AlarmRoute /> } />
          <Route path='statistics' element={<div>statistics route</div>} />          
        </Route>     
      </Routes>    
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
