'use strict'

// .....................................................................
// ReglasREST.js
// .....................................................................
// Connecting to ROS 


require('./ros')();
require('./dao')();

module.exports.cargar = function (servidorExpress) {

    // Test 
    servidorExpress.get('/prueba/', function (peticion, respuesta) {
        console.log(" * GET /prueba ");
        let obj = {
            data: "Funciona"
        }
        console.log(peticion.query)
        respuesta.send(JSON.stringify(obj.query));
    });

    servidorExpress.get('/playVoice', function (peticion, respuesta) {
        // define the service to be called
        get_phrase(peticion.query.phrase_id, (phrase) => {
            playVoice(phrase, (data) => {
                respuesta.send(JSON.stringify(data))
            })
        })
    });

    servidorExpress.get('/insert_phrase', function (peticion, respuesta) {
        console.log(" * GET /insert_phrase ");
        insert_phrase(peticion.query.phrase);
        console.log()
        // DEBERIA DE HABER CALLBACK DEL METODO
        let obj = {
            response:"Successful"
        }
        respuesta.send(JSON.stringify(obj))
    });


    //
    // COSAS DE ROS
    //

    servidorExpress.get('/searchFigure', function (peticion, respuesta) {
        console.log(" * GET /playSound ");
        let obj = {
            figure:peticion.query.figure,
            color:peticion.query.color
        }
        searchFigure(obj,(res)=>{
            respuesta.send(JSON.stringify(res))
        });
    });

    servidorExpress.get('/playSound', function (peticion, respuesta) {
        console.log(" * GET /playSound ");
        playSound(peticion.query.phrase_id,(res)=>{
            respuesta.send(JSON.stringify(res))
        });
    });

    servidorExpress.get('/mover', function (peticion, respuesta) {
        // define the service to be called
        mover(peticion.query.place, (data) => {
            respuesta.send(JSON.stringify(data))
        })
    });

    servidorExpress.get('/explorar', function (peticion, respuesta) {

        explorar((data) => {
            respuesta.send(JSON.stringify(data))
        });

    });
    servidorExpress.get('/moverAtras', function (peticion, respuesta) {
        moverAtras((data) => {
            respuesta.send(JSON.stringify(data))
        });

    });

    servidorExpress.get('/moverDelante', function (peticion, respuesta) {
        moverDelante((data) => {
            respuesta.send(JSON.stringify(data))
        });
    });

    servidorExpress.get('/moverDerecha', function (peticion, respuesta) {
        moverDerecha((data) => {
            respuesta.send(JSON.stringify(data))
        });
    });

    servidorExpress.get('/moverIzquierda', function (peticion, respuesta) {
        moverIzquierda((data) => {
            respuesta.send(JSON.stringify(data))
        });
    });

    servidorExpress.get('/moverStop', function (peticion, respuesta) {
        moverStop((data) => {
            respuesta.send(JSON.stringify(data))
        });
    });

    servidorExpress.get('/mapa', function (peticion, respuesta) {
        respuesta.sendFile('/home/marcelo/catkin_ws/src/tibot/tibot_navigation_system/maps/mymap.pgm')
    });

    // rostopic pub /syscommand std_msgs/String "reset"
    servidorExpress.get('/borrarMapa', function (peticion, respuesta) {
        borrarMapa((data) => {
            respuesta.send(JSON.stringify(data))
        });
    });
}