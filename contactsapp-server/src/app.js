const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const contactsRoutes = require('./routes/contacts.routes');
const authRoutes = require('./routes/auth.routes');


//Esto es para poder llamar des del local a mi backend.
app.use(cors());

//Para poder acceder a las cookies;
app.use(cookieParser());

//Parsea los bodies de la request
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Declaración rutas auth
app.use('/', authRoutes);


//Middleware para validar si estás loggeado



//Dentro de contactsRoutes, la / és /contacts en realidad.
app.use('/contacts', contactsRoutes);



//Middlewear error handler (para no poner try catch en toda la aplicación)

module.exports = app;