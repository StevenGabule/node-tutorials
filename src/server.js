const express = require('express')
const app = express();
const db = require('./models')
const initialRoutes = require('./routes/tutorial.routes')

global.__basedir = __dirname + '/..';

app.use(express.urlencoded({ extended: true}))
initialRoutes(app)

db.sequelize.sync();

let port = 8080;

app.listen(port, () => console.log('running on port: ' + port))
