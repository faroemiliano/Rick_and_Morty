import React from "react"
import { useState } from 'react';
import { validateEmail } from "../../validate";

const Form = ()=> {
    const [userData, setUserData] = useState({
    email: '',
    password:'' ,
})

    const [error, setError] = useState({
        email: '',
        password:'' ,
    })

const handleOnChange = (event)=>{
    console.log(event);
    setUserData({
        ...userData,
        [event.target.name]: event.target.value
    })
   
}

const handleOnSubmit = (event)=>{

    event.preventDefault()
    const errorEmailMessage = validateEmail(userData.email)
    setError({
        ...error,
        email: errorEmailMessage
    })
}
    


    
    return (
         <form onSubmit={handleOnSubmit}>
            
            <label htmlFor="email">E-mail</label>
            <input name="email" type="email" placeholder="Ingrese su E-mail"  onChange={handleOnChange}/>
            {error.email && <p>{error.email}</p>}
            <label htmlFor='password'>Password</label>
            <input name='password' type= 'texto' placeholder="Digite su password"  onChange={handleOnChange}/>
                
            <button type="submit">Submit</button>


        </form>
        
        )
    }
    
    export default Form
    
         
    