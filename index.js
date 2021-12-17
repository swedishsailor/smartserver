/* Modules importing */
const utils = require('./utils');
const constants = require('./constants');

const express = require('express');
const app = express();
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', (e) => {
    console.log('Listener called', e);
})

emitter.emit('messageLogged', {id:1, url:'url'});

utils.hello();

app.listen(constants.PORT, ()=>{
    console.log('Server is running on port '+ constants.PORT + '...');
})

app.on('connection', ()=>{
    console.log('Someone connected');
})