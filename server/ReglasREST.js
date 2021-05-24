'use strict'

// .....................................................................
// ReglasREST.js
// .....................................................................
// Connecting to ROS 
var ROSLIB = require('roslib');


module.exports.cargar = function (servidorExpress) {



    var ros = new ROSLIB.Ros({
        url: 'ws://localhost:9090'
    });


    ros.on('connection', function () {
        console.log('Connected to websocket server.');
    });

    ros.on('error', function (error) {
        console.log('Error connecting to websocket server: ', error);
    });

    ros.on('close', function () {
        console.log('Connection to websocket server closed.');
    });


    servidorExpress.get('/prueba/', function (peticion, respuesta) {
        console.log(" * GET /prueba ");
        let obj = {
            data: "Funciona"
        }

        respuesta.send(JSON.stringify(obj));
    });

    servidorExpress.get('/mover', function (peticion, respuesta) {
        // define the service to be called
        let service = new ROSLIB.Service({
            ros: ros,
            name: '/move_robot_service',
            serviceType: 'tibot_navigation_system/MoveFixedPosMsg',
        })
        // define the request
        let request = new ROSLIB.ServiceRequest({
            place: peticion.query.place
        })
        // define a callback
        service.callService(request, (result) => {
            console.log('This is the response of the service ')
            console.log(result)
            let obj = {
                response: "Success",
                data: result
            }
            respuesta.send(JSON.stringify(obj));
        }, (error) => {
            let obj = {
                response: "Success",
                data: error,

            }
            respuesta.send(JSON.stringify(obj));
        })


    });

    servidorExpress.get('/explorar', function (peticion, respuesta) {
        // define the service to be called
        let service = new ROSLIB.Service({
            ros: ros,
            name: '/automatic_mapping_service',
            serviceType: 'tibot_navigation_system/AutomaticExploration',
        })
        // define the request
        let request = new ROSLIB.ServiceRequest({
            order: "start"
        })
        // define a callback
        service.callService(request, (result) => {
            console.log('This is the response of the service ')
            console.log(result)
            let obj = {
                response: "Success",
                data: result
            }
            respuesta.send(JSON.stringify(obj));
        }, (error) => {
            let obj = {
                response: "Success",
                data: error,

            }
            respuesta.send(JSON.stringify(obj));
        })

    });
    servidorExpress.get('/moverAtras', function (peticion, respuesta) {
        let topic = new ROSLIB.Topic({
            ros: ros,
            name: '/cmd_vel',
            messageType: 'geometry_msgs/Twist'
        })
        let message = new ROSLIB.Message({
            linear: {
                x: -1,
                y: 0,
                z: 0,
            },
            angular: {
                x: 0,
                y: 0,
                z: 0,
            },
        });
        try {
            topic.publish(message)
            let obj = {
                response: "Success"
            }
            respuesta.send(JSON.stringify(obj));
        } catch (err) {
            let obj = {
                response: "Failed",
                data: err
            }
            respuesta.send(JSON.stringify(obj));
        }

    });

    servidorExpress.get('/moverDelante', function (peticion, respuesta) {
        let topic = new ROSLIB.Topic({
            ros: ros,
            name: '/cmd_vel',
            messageType: 'geometry_msgs/Twist'
        });
        let message = new ROSLIB.Message({
            linear: {
                x: 1,
                y: 0,
                z: 0,
            },
            angular: {
                x: 0,
                y: 0,
                z: 0,
            },
        })
        try {
            topic.publish(message)
            let obj = {
                response: "Success"
            }
            respuesta.send(JSON.stringify(obj));
        } catch (err) {
            let obj = {
                response: "Failed",
                data: err
            }
            respuesta.send(JSON.stringify(obj));
        }
    });

    servidorExpress.get('/moverDerecha', function (peticion, respuesta) {
        // define the service to be called
        let topic = new ROSLIB.Topic({
            ros: ros,
            name: '/cmd_vel',
            messageType: 'geometry_msgs/Twist'
        });
        let message = new ROSLIB.Message({
            linear: {
                x: 0.5,
                y: 0,
                z: 0,
            },
            angular: {
                x: 0,
                y: 0,
                z: -0.5,
            },
        });
        try {
            topic.publish(message)
            let obj = {
                response: "Success"
            }
            respuesta.send(JSON.stringify(obj));
        } catch (err) {
            let obj = {
                response: "Failed",
                data: err
            }
            respuesta.send(JSON.stringify(obj));
        }

    });

    servidorExpress.get('/moverIzquierda', function (peticion, respuesta) {
        let topic = new ROSLIB.Topic({
            ros: ros,
            name: '/cmd_vel',
            messageType: 'geometry_msgs/Twist'
        });
        let message = new ROSLIB.Message({
            linear: {
                x: 0.5,
                y: 0,
                z: 0,
            },
            angular: {
                x: 0,
                y: 0,
                z: 0.5,
            },
        })
        try {
            topic.publish(message)
            let obj = {
                response: "Success"
            }
            respuesta.send(JSON.stringify(obj));
        } catch (err) {
            let obj = {
                response: "Failed",
                data: err
            }
            respuesta.send(JSON.stringify(obj));
        }
    });

    servidorExpress.get('/moverStop', function (peticion, respuesta) {
        // define the service to be called
        let topic = new ROSLIB.Topic({
            ros: ros,
            name: '/cmd_vel',
            messageType: 'geometry_msgs/Twist'
        })
        let message = new ROSLIB.Message({
            linear: {
                x: 0,
                y: 0,
                z: 0,
            },
            angular: {
                x: 0,
                y: 0,
                z: 0,
            },
        });
        try {
            topic.publish(message)
            let obj = {
                response: "Success"
            }
            respuesta.send(JSON.stringify(obj));
        } catch (err) {
            let obj = {
                response: "Failed",
                data: err
            }
            respuesta.send(JSON.stringify(obj));
        }

    });

    // rostopic pub /syscommand std_msgs/String "reset"



  servidorExpress.get('/borrarMapa', function (peticion, respuesta) {
        let topic = new ROSLIB.Topic({
            ros: ros,
            name: '/syscommand',
            messageType: 'std_msgs/String'
        });
        let message = new ROSLIB.Message("reset")
        try {
            topic.publish("reset")
            let obj = {
                response: "Success"
            }
            respuesta.send(JSON.stringify(obj));
        } catch (err) {
            let obj = {
                response: "Failed",
                data: err
            }
            respuesta.send(JSON.stringify(obj));
        }
    });








    // .......................................................
    // GET USUARIOS
    // .......................................................
    servidorExpress.post(
        '/interpolate',
        function (peticion, respuesta) {
            console.log(" * POST /interpolate ");

        });
}