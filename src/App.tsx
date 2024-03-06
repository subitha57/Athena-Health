import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './LoginAthen/Login';
import IndexLogin from './LoginAthen/IndexLogin';
import PatientForm from './components/PatientForm';


function App() {
  return (
    <Routes>
    <Route path='/' element={<PatientForm/>} />
    <Route path='/Login' element={<Login/>} />
            
    </Routes>
  );
}

export default App;
