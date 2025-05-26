// server.js
const express = require('express');
const cors = require('cors');
const dashboardRoutes = require('./routes/dashboard');

const server = express();
const PORT = 3001;

server.use(cors());
server.use(express.json());

// Usa il router per /dashboard
server.use("/dashboard", dashboardRoutes);

server.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
});