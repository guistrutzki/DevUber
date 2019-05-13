export const verifyLogin = function(){

    return new Promise(function (resolve, reject)  {
        
        // Temporariamented]
        setTimeout(function () {
            let status = 2;

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