const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});
myEmitter.on('Date', (date) => {
  console.log(`Your College is starting on, ${date}! Welcome to ABES EC`);
});
myEmitter.on('exit',()=> {
    console.log('Applications are Closed Now for New Admission');
});
myEmitter.on('doubts',()=> {
    console.log('Your College is welcoming you if you have any doubts DM me');
});
myEmitter.emit('greet', 'Juniors');
myEmitter.emit('Date', '10 September 2026');
myEmitter.emit('exit');
myEmitter.emit('doubts');