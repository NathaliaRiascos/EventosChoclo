// Dependences
require('dotenv').config()
// Globals
global.reqlib = require('app-root-path').require
// Constants
const express = require('express')
const bodyP   = require('body-parser')
const cors    = require('cors')
const app     = express()
const http    = require('http').Server(app)
const db      = require('../v1/models')
const Role    = db.role

db.sequelize.sync();

// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Db')
//   initial()
// });

function initial() {
Role.create({
    role_id: 1,
    role_name: "user"
});

Role.create({
    role_id: 2,
    role_name: "admin"
});
}
// const io      = require('socket.io')(http)

// Framework instance
app.use(express.static('public'));
app.use(bodyP.urlencoded({ extended: false }));
app.use(bodyP.json({limit: '50mb'}))
app.use(cors())

require('../v1/routes/routes')(app)

// Deploy
http.listen(process.env.PORT, function () {
    console.log('listening on *:' + process.env.PORT)
})