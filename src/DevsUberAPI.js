export const verifyLogin = function(){

    return new Promise(function (resolve, reject)  {
        
        // Temporariamented]
        setTimeout(function () {
            // let status = 2;
            // Entra automatico no Home
            let status = 1;

            resolve(status);
        }, 1000)
    });
};

export const makeLogin = function (email, password) {

    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            let status = 1;
            resolve(status);
        }, 1000)
    })

};

export const makeSignUp = function (name, email, password) {

    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            let status = 1;
            resolve(status);
        }, 1000)
    })
};

export const makeForgot = function(email) {
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            resolve();
        }, 1000);
    });
}

export const makeLocationSearch = function(locTxt){
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            let array = [
                {id:1, label: 'Rua Bla bla, 250', lat: -10, lng: -11},
                {id:2, label: 'Rua Fulano, 144', lat: -20, lng: -21},
                {id:3, label: 'Rua Ciclano, 300', lat: -31, lng: -31},
                {id:4, label: 'Rua Três de maio, 218', lat: -31.778557, lng: -52.330077}
            ];

            resolve(array);
        }, 500);
    });
}