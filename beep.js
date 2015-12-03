var io = require('socket.io')({
	transports: ['websocket'],
});

// SOCKET CONNECTION

io.attach(4567);


io.on('connection', function(socket){
	console.log('unity connected')
	socket.on('beep', function(){
		console.log("Got a beep")
		io.emit('boop');
	});

	socket.on('disconnect', function(){
		console.log("Unity disconnected")
	})
})

var http = require('http');

var Router = require('node-simple-router');
var router = Router();

var server = http.createServer(router);

router.get("/left", function(request, response){
	io.emit("left");
	console.log("Left Left")
	response.end("Left");
})

router.get("/right", function(request, response){
	io.emit("right");
	console.log("Right right")
	response.end("Right");
})

router.get("/up", function(request, response){
	io.emit("up");
	console.log("UP UP and away")
	response.end("Up")
})

router.get("/down", function(request, response){
	io.emit("down");
	console.log("DOWN DOWN")
	response.end("Down")
})

server.listen(3000, function(){
	console.log("Server listening on port")
})


