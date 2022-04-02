const express = require('express');
<<<<<<< HEAD
const app = express();
=======
const app=express();
>>>>>>> d5a67efcec8ba921af60442605e2f7fea11e35a9
const cors = require('cors');
const port = 3000;

app.use(cors());
app.use(express.json());
<<<<<<< HEAD

//Routes Includes
const customersRouter = require('./routes/customers');
const employeesRouter = require('./routes/employees');

//Routes
app.use('/app/customers', customersRouter);
app.use('/app/employees', employeesRouter);

app.use ((err, req, res, next) => {
    const code = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(code).json({message:err.message});
    return;
});

app.get('/',(req,res)=>{
    res.json({
        message:'Welcome to the Backend'
    });
});


=======

//Routes Includes
const customersRouter = require('./routes/customers');

app.get('/',(req,res)=>{
    res.json({
        message:'Welcome to the Backend'
    });
});

//Routes
app.use('/app/customers', customersRouter);

>>>>>>> d5a67efcec8ba921af60442605e2f7fea11e35a9
app.listen(port, ()=>console.log(`Server is running on port ${port}`));
