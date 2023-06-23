import React from "react"
import Card from "./Card"
import styles from "../Styles/Cards.module.css"


export default function Cards({characters}) {
   return (
   <div className={styles.Cardscontainer}>
      {
         characters.map(({id,name, status, species, gender, origin, image})=> {
            return (
               <Card
               key={id}
               id={id}
               name={name}
               status={status}
               species={species}
               gender={gender}
               origin={origin.name}
               image={image}

               />
            )
         })
      }
   </div>
)}
