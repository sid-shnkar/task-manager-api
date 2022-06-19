const mongoose=require('mongoose')
const validator=require('validator')

//const userSchema=new mongoose.Schema({

const taskSchema=new mongoose.Schema({
    description:{
type:String,
required:true,
trim:true
    },
    completed:{
type:Boolean,
default:false
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
},
{
    timestamps:true
})

// const newtask=new Task({
//     description:'Second task',
//     completed:true
// })

// newtask.save().then(() => {
// console.log(newtask)
// }).catch((error) => {
// console.log("Error: ",error)
// })


const Task=mongoose.model('Task', taskSchema)

module.exports=Task