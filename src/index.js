// CON ESTO TENGO UN SERVIDOR
const express = require ('express');
const app = express();

//para conectar backend-frontend
const cors = require('cors')
app.use(cors());

const morgan= require('morgan')
app.use(morgan('dev'))


app.use(express.json());

const taskRoutes = require('./routes/tasks.routes');
app.use(taskRoutes);


app.use((err, req, res, next) =>{
    return res.json({
        message : err.message
    })
})





//CONECTAMOS (EL SERVIDOR) LA APP AL PUERTO  3000
app.listen(3000)
console.log('Server on port 3000');