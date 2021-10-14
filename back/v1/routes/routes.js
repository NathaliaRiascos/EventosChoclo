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
	app.get('/v1/getUsers', UserController.getUsers)
	app.post('/v1/searchUsers', UserController.searchUsers)

	// Events
	app.post('/v1/event', verifyToken, EventController.store)
	app.get('/v1/getEvents', EventController.get)
	app.get('/v1/getEvents-date/:event_date', EventController.getByDate)
	app.post('/v1/updateEvent/:event_id', EventController.update)
	app.post('/v1/deleteEvent/:event_id', EventController.delete)


}
