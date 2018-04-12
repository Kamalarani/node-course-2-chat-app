var socket = io();

socket.on("connect",function(){
  console.log("Connected To Server");

  socket.emit("createMessage",{
    from: "jen@ex.com",
    text:"hi how r u"
  });
});

socket.on("disconnect",function() {
  console.log("Disconnect from server");
});

socket.on("newMessage",function(message) {
  console.log("New Message",message);
});
