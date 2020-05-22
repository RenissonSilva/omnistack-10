const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://reni:reni@cluster0-dkxxn.mongodb.net/week10?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors()); //Dessa forma libera acesso externo pra todo tipo de aplicação 
app.use(express.json());
app.use(routes);

app.listen(3333);