const initialState = {
    name: 'fulano',
    email: '123',
    pass: '321',
    nameValid: false,
    emailValid: false,
    passValid: false,
    status: 0 // [0 => Não verificado, 1 => Logado, 2 => Não logado
}

const AuthReducer = (state = initialState, action)=>{
    
    if(action.type === 'changeStatus'){
        return {...state, status: action.payload.status};
    }

    if(action.type === 'setNameField'){
        let isValid = false;
        let re = /[a-z ]{2,}/;

        if(re.test( action.payload.name.toLowerCase())){
            isValid = true;
        }

        return {...state, name:action.payload.name, nameValid: isValid}
    }

    if(action.type === 'setEmailField'){
        let isValid = false;
        let re = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

        if(re.test( action.payload.email.toLowerCase())){
            isValid = true;
        }

        return {...state, email:action.payload.email, emailValid: isValid}
    }

    if(action.type === 'setPasswordField'){
        let isValid = false;

        if(action.payload.pass.length >= 6){
            isValid = true;
        }
        return {...state, pass:action.payload.pass, passValid: isValid}
    }

    return state;
};

export default AuthReducer;