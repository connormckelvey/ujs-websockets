var connection = new WebSocket('ws://localhost:1337');
var textareaClient = document.querySelector('.client');
var textareaServer = document.querySelector('.server');

connection.onopen = function () {
  console.log('Connected');
};

connection.onerror = function (error) {
  // an error occurred when sending/receiving data
};

connection.onmessage = function (message) {
  textareaServer.value += message.data;
};

textareaClient.onkeypress = function(e) {
  var chCode = ('charCode' in event) ? event.charCode : event.keyCode;
  var chStr = String.fromCharCode(chCode);
  connection.send(chStr);
}
