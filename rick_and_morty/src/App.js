import './App.css';
import React from 'react';
import Cards from './components/Componentes/Cards.jsx'; 
import Nav from './components/Componentes/Nav.jsx';
import { useState } from 'react';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom'
import About from './components/Componentes/About'
import Detail from './components/Componentes/Detail'
import Form from './components/Componentes/Form';
import { useLocation } from 'react-router-dom';







function App() {
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

            <Route path= '/' Component = {Form}/>
            <Route path='/about' Component={About}/>
            <Route path= '/home' element = {<Cards characters={characters} />}/>
            <Route path='/detail/:id' Component={Detail}/>
         </Routes>

            

        
      </div>
   );
}

export default App;

