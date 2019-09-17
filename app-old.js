const http = require('http'); //incluimos paquete HTTP que permite crear webserver

//crear servidor web

http.createServer((req, res) => {



        let salida = {
            nombre: 'jose',
            edad: 17,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        res.end();

        // res.write('Hola Mundo');
        // res.end();

    })
    //puerto normal 3000 u 8080
    .listen(8080);

console.log('Escuchando en puerto 8080');