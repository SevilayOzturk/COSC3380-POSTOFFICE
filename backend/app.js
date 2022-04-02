const express = require('express');
const app=express();
const cors = require('cors');
const port = 3000;

app.use(cors());
app.use(express.json());

//Routes Includes
const customersRouter = require('./routes/customers');

app.get('/',(req,res)=>{
    res.json({
        message:'Welcome to the Backend'
    });
});

//Routes
app.use('/app/customers', customersRouter);

app.listen(port, ()=>console.log(`Server is running on port ${port}`));
