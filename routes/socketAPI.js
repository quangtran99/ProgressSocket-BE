

module.exports = function (io) {
  io.on("connection", function (socket) {
    console.log("a user has connected");

    
    socket.on("vote", (option) => {
        console.log("Check my option", option);
        io.emit("receiveVote", option);
      });
  });


};
