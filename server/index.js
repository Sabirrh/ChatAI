// jshint esversion:8
const express = require('express');
const http = require('http');
const cors = require('cors');
const {registerSocketServer} = require('./socket/socketServer');
require('dotenv').config();

//Server setUp
const app = express();
const server = http.createServer(app);
registerSocketServer(server)

//Middleware
app.use(cors);

app.get('/', (req, res) => {
   res.send({response:'ok'})
    
})

const PORT = process.env.PORT || 5004;
server.listen(PORT, () => {
    console.log(`Sever is running on port ${PORT}`)
})

