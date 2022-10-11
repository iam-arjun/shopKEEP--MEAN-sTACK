const mongoose = require('mongoose');


const Customerdata = mongoose.Schema({
   

    Name: {
        type: String

    },
    Email: {
        type: String

    },
    Phone: {
        type: String

    },
    Address: {
        type: String

    }

})

const MyCustomer = mongoose.model('CustomerInfo', Customerdata)

module.exports = MyCustomer
