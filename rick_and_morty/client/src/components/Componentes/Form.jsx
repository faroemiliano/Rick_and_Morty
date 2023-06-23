import React from "react"
import { useState } from 'react';
import { validateEmail, validatePass } from "../../validate";



const Form = (props)=> {
    const [userData, setUserData] = useState({
    email: '',
    password:'' ,
})

    const [error, setError] = useState({
        email: '',
        password:'' ,
    })

const handleOnChange = (event)=>{
   
    setUserData({
        ...userData,
        [event.target.name]: event.target.value
    })
    if (event.target.name === 'email'){
    const errorEmailMessage = validateEmail(event.target.value)
    setError({
        ...error,
        email: errorEmailMessage
    })}

    if (event.target.name ==='password'){
    const errorpass = validatePass(event.target.value)
    setError({
        ...error,
        password: errorpass
    })}
   
}

const handleOnSubmit = (event)=>{
    event.preventDefault()
    props.login(userData)



    
}

    


    
    return (
        <form onSubmit={handleOnSubmit}>
            <img src="./img/form.png" alt="" />     
            <label htmlFor="email">E-mail</label>
            <input name="email" type="email" placeholder="Ingrese su E-mail"  onChange={handleOnChange}/>
            {error.email && <p>{error.email}</p>}
            <label htmlFor='password'>Password</label>
            <input name='password' type= 'texto' placeholder="Digite su password"  onChange={handleOnChange}/>
            {error.password && <p>{error.password}</p>}
                
            <button type="submit">Submit</button>


        </form>
        
        )
    }
    
    export default Form
    
         
    