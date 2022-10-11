
const express = require('express')
require('./dbconn')
const Customer = require('./dbmodel')
const Customer_trans = require('./transmodel')



const myapp = express()
const port = 8000;
myapp.use(express.json())
myapp.use(express.urlencoded({ extended: false }))
const cors = require('cors')
myapp.use(cors({
    origin: true
}));


// customer data only -- http method

myapp.post('/customerInfo', (req, res) => {
    try {

        const mycustomer = new Customer({
            Name:req.body.Name,
            Email:req.body.Email,
            Phone:req.body.Phone,
            Address:req.body.Address
        });
        mycustomer.save();
        res.status(201).send(mycustomer);



    } catch (e) {
        res.status(400).send(e);
    }
})

myapp.get('/customerInfo', async (req, res) => {
    try {
        const get_customer_data = await Customer.find({});


        res.send(get_customer_data);
    } catch (e) {
        res.status(400).send(e);
    }
})

// for updating the customer data

myapp.put('/customerInfo/:id', (req, res) => {

    console.log(req.params.id)
    console.log(req.body)
    try {
        let cust = {
            Name: req.body.Name,
            Email: req.body.Email,
            Phone: req.body.Phone,
            Address: req.body.Address
        }

        Customer.findByIdAndUpdate(req.params.id, { $set: cust }, { new: true }, (error, doc) => {
            if (error) {
                res.send(error)

            }
            else {
                res.send(doc)


            }
        })


    } catch (e) {
        res.status(400).send(e);
    }
})

// deleting method 
myapp.delete('/customerInfo/:id', (req, res) => {

    try {


        Customer.findByIdAndRemove(req.params.id, (error, doc) => {
            if (error) {
                console.log('Failing in deletin the data')
            }
            else {
                res.send(doc)
              
            }
        })


    } catch (e) {
        res.status(400).send(e);
    }
})




// customer transaction http request

myapp.post('/customerInfo/customerTrans', (req, res) => {
    try {

        const mytrans = new Customer_trans(req.body);
        mytrans.save();
        res.status(201).send(mytrans);
        // res.send('ok')


    } catch (e) {
        res.status(400).send(e);
    }
})

myapp.get('/customerInfo/customerTrans', async (req, res) => {
    try {
        const get_customer_trans = await Customer_trans.find({});


        res.send(get_customer_trans);
    } catch (e) {
        res.status(400).send(e);
    }
})













myapp.listen(port, () => {

    console.log(`App is responding by listening the request at http://
    localhost:${port}`);

});