const express = require('express');
const cors = require('cors'); // Import CORS middleware
const app = express();
const port = 5000;
const mongoDB = require("./db");
mongoDB();

// Use CORS middleware to allow frontend origin
app.use(cors({ origin: "http://localhost:3000" }));

// Middleware for JSON parsing
app.use(express.json());

// Routes
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));

// Root endpoint
app.get('/', (req, res) => {
    res.send("Hello world!");
});

// Start server
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
