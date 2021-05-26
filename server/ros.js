var ROSLIB = require('roslib');

var ros = new ROSLIB.Ros({
    url: 'ws://0.0.0.0:9090'
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


module.exports = function () {

    this.mover =function(place,cb) {
        let service = new ROSLIB.Service({
            ros: ros,
            name: '/move_robot_service',
            serviceType: 'tibot_navigation_system/MoveFixedPosMsg',
        })
        // define the request
        let request = new ROSLIB.ServiceRequest({
            place: place
        })
        // define a callback
        service.callService(request, (result) => {
            console.log('This is the response of the service ')
            console.log(result)
            let obj = {
                response: "Success",
                data: result
            }
            cb(obj);
        }, (error) => {
            let obj = {
                response: "Success",
                data: error,

            }
            cb(obj);
        })
    }

    this.explorar =function(cb) {
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
            cb(obj);
        }, (error) => {
            let obj = {
                response: "Success",
                data: error,

            }
            cb(obj);
        })
    }

    this.moverAtras = function(cb){
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
            cb(obj);
        } catch (err) {
            let obj = {
                response: "Failed",
                data: err
            }
            cb(obj);
        }
    }

    this.moverDelante = function(cb){
        let topic = new ROSLIB.Topic({
            ros: ros,
            name: '/cmd_vel',
            messageType: 'geometry_msgs/Twist'
        })
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
        });
        try {
            topic.publish(message)
            let obj = {
                response: "Success"
            }
            cb(obj);
        } catch (err) {
            let obj = {
                response: "Failed",
                data: err
            }
            cb(obj);
        }
    }

    this.moverDerecha = function(cb){
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
            cb(obj);
        } catch (err) {
            let obj = {
                response: "Failed",
                data: err
            }
            cb(obj);
        }
    }

    this.moverIzquierda = function(cb){
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
            cb(obj);
        } catch (err) {
            let obj = {
                response: "Failed",
                data: err
            }
            cb(obj);
        }  
    }

    this.moverStop = function(cb){
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
            cb(obj);
        } catch (err) {
            let obj = {
                response: "Failed",
                data: err
            }
            cb(obj);
        }
    }

    this.stream_camera = function(cb){

    }

    this.borrarMapa = function(cb){
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
            cb(obj);
        } catch (err) {
            let obj = {
                response: "Failed",
                data: err
            }
            cb(obj);
        }
    }
}