const express = require('express');
const path = require('path');
const requestLogger = require('./middlewares/request-logger.middleware');
const controllers = require('./controllers');
const cors = require("cors");

const PORT = 3000;

const server = express();

server.use(express.static(path.resolve(__dirname, 'styles')));

server.use(cors({
    origin: "*"
}));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(requestLogger);

server.use(controllers);

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});