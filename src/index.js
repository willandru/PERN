// CON ESTO TENGO UN SERVIDOR
const express = require ('express');
const app = express();



const morgan= require('morgan')
app.use(morgan('dev'))


app.use(express.json());

const taskRoutes = require('./routes/tasks.routes');
app.use(taskRoutes);






//CONECTAMOS (EL SERVIDOR) LA APP AL PUERTO  3000
app.listen(3000)
console.log('Server on port 3000');