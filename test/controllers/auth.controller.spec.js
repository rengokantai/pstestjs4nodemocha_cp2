var assert = require('assert');
var authController = require('../../controllers/auth.controller');



describe('AuthController', function () {

    describe('isAuthorized', function () {

        it('Should return false if not authorized', function () {
            assert.equal(false, authController.isAuthorized('admin'));
        })
        it('Should return true if authorized', function () {
            authController.setRoles(['user', 'admin']);
            assert.equal(true, authController.isAuthorized('admin'));
        })
        it('should not allow a get if not authorized');
        it('should allow get if authorized');
    })


});