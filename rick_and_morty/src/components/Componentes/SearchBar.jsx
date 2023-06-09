import React from "react";
import styles from '../Styles/Searchbar.module.css'
import { useState } from "react";

export default function SearchBar({oneSearch}) {
      const [id, setId] = useState ('')
      const handleChange = (event) =>{
         setId(event.target.value)

      }

   return (
      <div >
         <input  type='search' onChange={handleChange} value={id} />
         <button onClick={() => {oneSearch(id)}} >Agregar</button>
      </div>
   );
}
