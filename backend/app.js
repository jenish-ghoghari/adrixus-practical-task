const express = require('express')
const fileUpload = require('express-fileupload');
var path = require('path');
const cors = require('cors');
const app = express()

NODE_ENV = 'local';
require('./config/db')

app.use(express.json());
app.use(fileUpload());
app.use(cors());

app.use('/api', require('./api/routes')(express))

const PORT = 8000
app.listen(PORT, () => console.log(`listening port ----------------------> localhost:${PORT}`))