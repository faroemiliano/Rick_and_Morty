import React from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'


const Detail = ()=>{
    let {id} = useParams()
    const [character, setCharacter] = useState({}) 
    

    useEffect(() => {


        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });

        return setCharacter({});
     }, [id]);
     
     if (Object.keys(character  ).length > 0){
        return(
            <div>
                <h1>Name: {character.name}</h1>
                <h1>Status: {character.status}</h1>
                <h1>Species: {character.species}</h1>
                <h1>Gender: {character.gender}</h1>
                <h1>Origin: {character.origin.name}</h1>
                <h1>image: {character.image}</h1>
    
                
            </div>
        )
     }


    return(
       <h1>
           No hay nada forro
       </h1>
       
    )
}

export default Detail