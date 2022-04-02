
    var dgram = require('dgram');
    
    var s = dgram.createSocket('udp4');


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var recursiveAsyncReadLine = function () {
    rl.question('Enter The Id Of Player Transmitting (type "exit" to close): ', function (playerTransmit) {
        if (playerTransmit == 'exit') //we need some base case, for recursion
            return rl.close(); //closing RL and returning from function.
       
        
        rl.question('Enter The Id Of Player Being Hit : ', function (playerHit) {
            console.log(`${playerTransmit} HIT ${playerHit}...Score Updated On Web Application`);
            
            s.send(Buffer.from(`${playerTransmit}:${playerHit}`),7500,'127.0.0.1');
            recursiveAsyncReadLine();
          });
        recursiveAsyncReadLine(); //Calling this function again to ask new question
    });
};

recursiveAsyncReadLine();

rl.on('close', function () {
  console.log('\nBYE BYE !!!');
  process.exit(0);
});