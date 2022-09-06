import five from 'johnny-five';

const board = new five.Board();
const btn = new five.Button(15);
const led = new five.Led(14);

console.log('pins',board.pins)
console.log('id',board.id)
console.log('io',board.io)
console.log('isReady',board.isReady)
console.log('port',board.port)
console.log('port',board.port)

console.log('------')

console.log('downValue',btn.downValue)
console.log('holdtime',btn.holdtime)
console.log('id',btn.id)
console.log('pin',btn.pin)
console.log('upValue',btn.upValue)

console.log('------')

console.log('id', led.id)
console.log('pin', led.pin)
