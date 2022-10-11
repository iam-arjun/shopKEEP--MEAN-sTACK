const mongoose = require('mongoose')

const Customertrans = mongoose.Schema({

     
    Date: {
        type: Date

    },
    Name:{
        type:String

    },
    Type: {
        type: String

    },
    Amount: {
        type: String

    },
    Remarks: {
        type: String

    }

})
const MyCustomerTrans = mongoose.model('CustomerTransaction',Customertrans)
module.exports = MyCustomerTrans
