import five from 'johnny-five';
import Raspi = require("raspi-io").RaspiIO;
const board = new five.Board({
    io: new Raspi
});

board.on(('ready'),function(){

    const led = new five.Led("P1-15");

    console.log('pins',board.pins)
    console.log('id',board.id)
    console.log('io',board.io)
    console.log('isReady',board.isReady)
    console.log('port',board.port)
    console.log('port',board.port)
    
    console.log('------')

    
    console.log('------')
    
    console.log('id', led.id)
    console.log('pin', led.pin)
})

