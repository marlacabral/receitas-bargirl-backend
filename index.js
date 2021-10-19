// if (process.env.NODE_ENV !== 'production'){
//     require('dotenv').config();
// }

const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const Conn = require('./conn/drink.conn');
Conn();

const drinkRoutes = require('./routers/drink.routes');

app.use('/drink', drinkRoutes);


const port = 3001;

app.listen(port, () => {
    console.log(`Server loading in port ${port}.`)
});