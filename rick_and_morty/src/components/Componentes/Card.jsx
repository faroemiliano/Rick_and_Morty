import React from "react";
import styles from "../Styles/Card.module.css"
import { Link } from "react-router-dom";


export default function Card({name, status, species, gender, image, onClose, id}) {
   return (
      <div className={styles.container}>
        
         <button onClick={onClose} className={styles.closeButton}>X</button>
     <Link to={`/detail/${id}`}>
         <h2 className={styles.textTitulo}>Name: {name}</h2>
     </Link>
         
         <img src={image} alt='' /> 
         <div className={styles.textOtros}>

           <h2>Species: {species}</h2>
           <h2>Gender: {gender}</h2>
           <h2>Status: {status}</h2>
         </div>
      </div>
        
         
         
   );
}

