

export const validateEmail = (email) => {
    if (email.length === 0 || email.length > 35){
        return "El mail debe tener entre 1 y 35 caracteres"
}

else if (!/\S+@\S+\.\S+/.test(email)){
        return  'le estas pifiando al e-mail'
        
    }
    
    else {
        return  ''
}
}
     

