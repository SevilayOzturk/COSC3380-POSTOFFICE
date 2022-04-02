const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function get() {
    const rows = await db.query(`SELECT * FROM Customer`);
    const data = helper.rowclean(rows);
    return data;
}

async function getCustomer(id) {
    const rows = await db.query(`SELECT * FROM Customer WHERE Customer_ID = ?`, [id]);
    const data = helper.rowclean(rows);
    return data;
}

async function getData(page = 1){
    const offset = helper.getoffset(page, config.listPerPage);
    const rows = await db.query(`select * from Customer LIMIT ${offset},${config.listPerPage}`);
    const data = helper.rowclean(rows);
    const meta = {page};
    return {meta, data}
}

async function getById(Customer_ID) {
    const user = await db.query(`SELECT * FROM Customer WHERE Customer_ID = ?`, [Customer_ID]);
    const data = helper.rowclean(user);
    // const meta = {page};
    // return {meta, data};
    return data;
}

async function createCustomer(req) {
    const First_Name = req.body.First_Name;
    const Middle_Init = req.body.Middle_Init;;
    const Last_Name = req.body.Last_Name;
    const Customer_Phone_Num = req.body.Customer_Phone_Num;
    const Customer_Address_Key = req.body.Customer_Address_Key; 
    
    console.log("CreateCustomer", First_Name, Middle_Init, Last_Name, Customer_Phone_Num, Customer_Address_Key);

    const customer = await db.query(
        `INSERT INTO Customer (First_Name, Middle_Init, Last_Name, Customer_Phone_Num, Customer_Address_Key) 
        VALUES (?,?,?,?,?)`, 
        [First_Name, Middle_Init, Last_Name, Customer_Phone_Num, Customer_Address_Key]);

    // const customer = await db.query(`INSERT INTO Customer (First_Name, Middle_Init, Last_Name, Customer_Phone_Num, Customer_Address_Key) VALUES ('first','m','last',123456,1)`);
    
    
    // JESUS christ watch this video at 2:25 am mark..because of one capital letter took like 20 mins lol
    
    // you need customer_id auto incrementing @ 2:40am
    
    console.log("CreateCustomer:", customer);
    return {"message": "Customer created"};
}

async function updateCustomer(req) {
    const First_Name = req.body.First_Name;
    const Middle_Init = req.body.Middle_Init;;
    const Last_Name = req.body.Last_Name;
    const Customer_Phone_Num = req.body.Customer_Phone_Num;

    console.log("Update Customer:", First_Name, Middle_Init, Last_Name, Customer_Phone_Num);

    const customer = await db.query(
        `UPDATE Customer SET First_Name = ?, Middle_Init = ?, Last_Name = ?, Customer_Phone_Num = ? WHERE Customer_ID = ?`,
        [First_Name, Middle_Init, Last_Name, Customer_Phone_Num, req.params.id]);
    
        return("message", "Customer updated");
    
}

async function removeCustomer(req) {
    let id = req.body.id;

    const remove = await db.query(`DELETE FROM Customer WHERE Customer_ID = ?`, [id]);
    return {"message": "Customer deleted"};
}

module.exports = {
    get,
    getCustomer,
    getData,
    getById,
    createCustomer,
    updateCustomer,
    removeCustomer
}