const mongoose  = require('mongoose')
mongoose.connect('mongodb://localhost:27017/CustomerData',{ autoIndex: false },()=>{
    console.log('connected successfully')
},(error)=>{
    console.log('Not connected')
})