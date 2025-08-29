const express = require('express')
const connectToMongo = require('./db');
const cors = require('cors')
require('dotenv').config()

connectToMongo();

const app = express()

app.use(cors())
app.use(express.json());
const port = process.env.PORT

app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

