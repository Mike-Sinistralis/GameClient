import io from 'socket.io-client';

const socket = io('http://localhost:3000');
socket.on('connect', function(){

});

socket.on('test', function(data){
  console.log(data);
});

socket.on('disconnect', function(){

});

socket.emit('echo', 'hi');