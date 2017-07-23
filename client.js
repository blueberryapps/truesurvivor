const io = require('socket.io-client')
var socket = io.connect('http://localhost:9000');


socket.emit('find_fight');

/*
  auth -> uid
  update_character -> character_object
  find_fight -> ()
  skill -> skill_key
*/
