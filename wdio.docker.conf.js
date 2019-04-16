require('babel-register');

const config = require('./wdio.conf.js').config;

// override selenium-standalone service by docker
config.services = [ "docker" ];

config.dockerOptions = {
    "image": "vvoyer/selenium-standalone:6.15.4",
    "healthCheck": {
        url: "http://localhost:4444/wd/hub/static/resource/hub.html",
        inspectInterval: 1000,
        startDelay: 20000
    },
    "options": {
        "d": true,
        "rm": true,
        "shm-size": "1g",
        "v": "/dev/shm:/dev/shm",
        "name": "ddam-wdio-e2e",
        "mount": "type=bind,source=" + __dirname +  ",target=" + __dirname,
        "p": [ "4444:4444" ]
    }
};

exports.config = config;