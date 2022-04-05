const express = require('express');

const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());
app.use(express.json());

//Routes Includes
const customersRouter = require('./routes/customers');
const employeesRouter = require('./routes/employees');
const addressRouter = require('./routes/address');
const itemRouter = require('./routes/item');
const packageRouter = require('./routes/package');
const postOfficeRouter = require('./routes/postOffice');
const supervisonRouter = require('./routes/supervision');
const trackingRouter = require('./routes/tracking');

//Routes
app.use('/app/customers', customersRouter);
app.use('/app/employees', employeesRouter);
app.use('/app/address', addressRouter);
app.use('/app/item', itemRouter);
app.use('/app/package', packageRouter);
app.use('/app/postOffice', postOfficeRouter);
app.use('/app/supervision', supervisonRouter);
app.use('/app/tracking', trackingRouter);

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


app.listen(port, ()=>console.log(`Server is running on port ${port}`));
