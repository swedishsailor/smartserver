/* Modules importing */
const utils = require('./utils');
const constants = require('./constants');

/* Main Imports */
const EventEmitter = require('events');
const express = require('express');
const app = express();

//Middleware
app.use(express.json());

app.get('/', (req,res)=>{
    db.query('SELECT * FROM users'), (err,result)=>{
        if (err){
            console.log(err)
        }else{
            console.log(res.send(result));
        }
        
    };
})

const emitter = new EventEmitter();

emitter.on('messageLogged', (e) => {
    console.log('Listener called', e);
})

app.listen(constants.PORT || 3000, ()=>{
    console.log(`Server is running on port ${constants.PORT}...`);
})

emitter.emit('messageLogged', {id:1, url:'url'});

utils.hello();

app.get('/', (req,res) => {
    res.send(
       '<h1>Yoo!</h1>'
    )
})

app.on('connection', ()=>{
    console.log('Someone connected');
})



