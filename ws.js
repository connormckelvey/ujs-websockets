var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 1337 });

wss.on('connection', function connection(ws) {
    console.log('Connected');
  ws.on('message', function incoming(message) {
    console.log('client: %s', message);
    ws.send(message);
  });
});