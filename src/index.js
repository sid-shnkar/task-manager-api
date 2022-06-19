const express = require('express')
require('./db/mongoose')
const userRouter=require('./routers/user')
const taskRouter=require('./routers/task')


const app = express()
const port = process.env.PORT


//middleware function
// app.use((req,res,next) => {
//     if(req.method==='GET'){
// res.send('GET requests are disabled')
//     }else{
//         next()
//     }
// })


// app.use((req,res,next) => {
//         res.status(503).send("Sit is under Maintainence. Please come back later.")
// })

// const multer=require('multer')
// const upload=multer({
//     dest: 'images',
//     limits:{
//         fileSize:1000000
//     },
//     fileFilter(req, file, cb){
//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a doc or docx'))
//         }

//         cb(undefined,true)
//     }
// })

// app.post('/upload', upload.single('upload'), (req,res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({error: error.message})
// })


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task=require('./models/task')
const User=require('./models/user')

// const main=async() => {

// const task=await Task.findById('62a0d3eefd1ee24fcc59493e')
// await task.populate('owner').execPopulate()
// console.log(task.owner)

// const user=await User.findById('62a0d3d1fd1ee24fcc59493c')
// await user.populate('tasks').execPopulate()
// console.log(user.tasks)


// }

// main()


