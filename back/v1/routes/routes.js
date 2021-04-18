'use strict'
//Llamamos al middlewares
var verifyToken = reqlib('/v1/routes/verifyToken');

//Controllers
const UserController = reqlib('/v1/controllers/userController.js');
const EventController = reqlib('/v1/controllers/eventController.js');

/* 
METHODS
All methods are define below this
*/

// Exportamos la configuración
module.exports = function (app) {
	// Users
	app.post('/v1/login', UserController.login)
	app.post('/v1/register', UserController.register)

	// Events
	app.post('/v1/event', verifyToken, EventController.store)
}
