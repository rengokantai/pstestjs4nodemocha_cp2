function AuthController(){


    function isAuthorized(neededRole){
        return roles.indexOf(neededRole) >= 0; 
    }

    return {isAuthorized};
}

module.exports = AuthController();