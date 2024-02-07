const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

if (process.env.NODE_ENV === "development") {
    this.app.use(morgan("dev"));
}

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Warming Shelter API!' });
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});