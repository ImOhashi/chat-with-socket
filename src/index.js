const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const path = require("path")

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./view/index.html"));
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
