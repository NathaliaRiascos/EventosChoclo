'use strict'
//Llamamos al middlewares
//var verifyToken = reqlib('/v1/routes/verifyToken');

//Controllers
const UsersController = reqlib('/v1/controllers/userController.js');

/* 
METHODS
All methods are define below this
*/

// Exportamos la configuración
module.exports = function (app) {
	// Users
	app.post('/login', UsersController.login)
	app.post('/register', UsersController.register)
}
