const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged',function(){
    console.log('Listerer Called');
});

// Raise an event
emitter.emit('messageLogged');