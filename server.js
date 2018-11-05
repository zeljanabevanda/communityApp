
const bodyParser = require('body-parser');
const cors = require('cors')

const express = require('express')
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
//routes
const login            = require('./routes/login-route');
const register         = require('./routes/register-route');
const usersRoutes      = require('./routes/users-route');
const profileRoutes    = require('./routes/profile-route');
const eventsRoutes     = require('./routes/events-route');
const deleteRoute      = require('./routes/delete-route');

app.use(login);
app.use(register);
app.use(usersRoutes);
app.use(profileRoutes);
app.use(eventsRoutes);
app.use(deleteRoute);


    









app.listen(3000, function() {
    console.log("listennn")
})