import { verifyLogin, makeLogin, makeSignUp, makeForgot} from '../DevsUberAPI';

export const checkLogin =  ()=>{
    return (dispatch) =>{
        verifyLogin()
            .then(function (status) {
                dispatch({
                    type: 'changeStatus',
                    payload: {
                        status
                    }
                })
            })
            .catch(function () {
                dispatch({
                    type: 'changeStatus',
                    payload: {
                        status: 2
                    }
                })
            });
    };
};

export const setNameField = (name)=>{
    return{
        type: 'setNameField',
        payload: {
            name
        }
    }
};

export const setEmailField = (email)=>{
    return{
        type: 'setEmailField',
        payload: {
            email
        }
    }
};

export const setPasswordField = (pass)=>{
    return{
        type: 'setPasswordField',
        payload: {
            pass
        }
    }
};

export const doLogin = (email, password) =>{
    return (dispatch) =>{
        makeLogin(email, password)
            .then(function (status) {
                
                if(status === 2){
                    alert ('Email e/ou senha errados!');
                }
                
                dispatch({
                    type: 'changeStatus',
                    payload: {
                        status
                    }
                })
            }).catch(function () {
                alert('Tente novamente mais tarde');
            })
    };
};

export const doSignUp = (name, email, password) =>{
    return (dispatch) =>{
        makeSignUp(name, email, password)
            .then(function (status) {

                if(status === 2){
                    alert ('Email já está cadastrado!');
                }

                dispatch({
                    type: 'changeStatus',
                    payload: {
                        status
                    }
                })
            }).catch(function () {
            alert('Tente novamente mais tarde');
        })
    };
};

export const doForgot = (email) =>{
    return (dispatch) =>{
        makeForgot(email)
            .then(function () {
                alert ("Enviamos um email de redefinição de senha.");
            })
            .catch(function () {
                alert('Tente novamente mais tarde');
            })
    };
}