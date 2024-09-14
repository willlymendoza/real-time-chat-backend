import express, { Request, Response } from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server);

const PORT = process.env.PORT ?? 4000;

app.get("/", (req: Request, res: Response) => {
  res.send("Chat app backend is running!");
});

io.on('connection', () => {
  console.log("A new user has connected")
})

server.listen(PORT, () => {
  console.log(`Server running in port: ${PORT}`);
});
