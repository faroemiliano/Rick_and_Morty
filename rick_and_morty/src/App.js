import './App.css';
import React from 'react';
import Cards from './components/Componentes/Cards.jsx'; 
import Nav from './components/Componentes/Nav.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom'
import About from './components/Componentes/About'
import Detail from './components/Componentes/Detail'
import Form from './components/Componentes/Form';
import { useLocation, useNavigate } from 'react-router-dom';








function App() {
   
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
   const navigate = useNavigate()

   const [access, setAccess] = useState(false);
   const EMAIL = 'faroemiliano@gmail.com';
   const PASSWORD = 'olala89';

  function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
      
   }

}

   
   const [characters, setCharacters] = useState([])
   const location = useLocation()


const onSearch = (id) => {
   axios(`https://rickandmortyapi.com/api/character/${id}`)
   .then(response => response.data)
   .then(( data ) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         alert('¡No hay personajes con este ID!');
      }
   });
}
return (
      <div className='App'>
        
        {location.pathname !== "/" && <Nav onSearch = {onSearch}/>}
        
         <Routes> 

            <Route path= '/' element = {<Form login={login}/>}/>
            <Route path='/about' Component={About}/>
            <Route path= '/home' element = {<Cards characters={characters} />}/>
            <Route path='/detail/:id' Component={Detail}/>
         </Routes>

            

        
      </div>
   );
}

export default App;

