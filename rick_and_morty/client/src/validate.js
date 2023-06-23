

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

export const validatePass = (password) =>{
    console.log(password)
    if (password.length < 6 || password.length > 10){
        return 'la contraseña debe contener de 6 a 10 carac'
    }

    else if(!/^(?=.*\d).+$/.test(password)){
        return 'falta un numero'
    }

    else {
        return ''
    }
}
     

