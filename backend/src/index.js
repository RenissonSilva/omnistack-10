const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://reni:reni@cluster0-dkxxn.mongodb.net/week10?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors()); //Dessa forma libera acesso externo pra todo tipo de aplicação 
app.use(express.json());
app.use(routes);

server.listen(3333);