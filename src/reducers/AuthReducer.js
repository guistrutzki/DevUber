const initialState = {
    email: ''
}

const AuthReducer = (state = initialState, action)=>{
    //Padrão 
    if(action.type == 'changeEmail'){
        return {...state, email:action.payload.email};
    }

    return state;
}

export default AuthReducer;