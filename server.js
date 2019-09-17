const express = require('express');
const app = express();

const port = process.env.PORT || 3000 // recoge puerto Heroku o 3000 si no existe (localhost)

app.use(express.static(__dirname + '/public'));

const hbs = require('hbs');
require('./hbs/helpers.js'); //importamos helpers

//parciales
hbs.registerPartials(__dirname + '/views/parciales');


// Express HBS engine
app.set('view engine', 'hbs');

//HELPERS
// hbs.registerHelper('getAnio', () => {
//     return new Date().getFullYear();
// });

// hbs.registerHelper('capitalizar', (texto) => {

//     //Capitaliza cada palabra de texto

//     let palabras = texto.split(' ')
//     palabras.forEach((palabra, idx) => {
//         palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
//     });

//     return palabras.join(' '); //unimos todas las palabras capitalizadas

// });

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Jose',
    });
    // res.render('home'); //nos despreocupamos que es un JSON
});

// app.get('/', (req, res) => {

//     res.render('home', {
//         nombre: 'Jose',
//         anio: new Date().getFullYear()
//     });
//     // res.render('home'); //nos despreocupamos que es un JSON
// });

app.get('/about', (req, res) => {

    res.render('about');
    // res.render('home'); //nos despreocupamos que es un JSON
});

// app.get('/about', (req, res) => {

//     res.render('about', {
//         anio: new Date().getFullYear()
//     });
//     // res.render('home'); //nos despreocupamos que es un JSON
// });


// app.get('/', function(req, res) {

//     let salida = {
//         nombre: 'jose',
//         edad: 17,
//         url: req.url
//     }

//     // res.send('Hello World')
//     res.send(salida); //nos despreocupamos que es un JSON
// });

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});
// app.listen(3000);