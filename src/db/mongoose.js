const mongoose=require('mongoose')
const validator=require('validator')

mongoose.connect(process.env.MONGODB_URL, {
useNewUrlParser:true,
useCreateIndex:true,
useFindAndModify:false
})




// const Task=mongoose.model('Task', {
//     description:{
// type:String,
// required:true,
// trim:true
//     },
//     completed:{
// type:Boolean,
// default:false
//     }
// })

// const newtask=new Task({
//     description:'Second task',
//     completed:true
// })

// newtask.save().then(() => {
// console.log(newtask)
// }).catch((error) => {
// console.log("Error: ",error)
// })



