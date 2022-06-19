//CRUD operations

const {MongoClient, ObjectID}=require('mongodb')
//const MongoClient=mongodb.MongoClient

const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'

// const id=new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {useNewUrlParser:true}, (error,client) => {
   if(error){
       return console.log('Unable to connect to database!')
   }

   const db=client.db(databaseName)
   //console.log('Connected correctly!')

//    db.collection('users').insertOne({
//         name:'Vikram',
//        age:26
//    }, (error,result) => {
//      if(error){
//          console.log("Unable to insert user")
//      }

//      console.log(result.ops)
//    })


//    db.collection('users').insertMany([{
//     name:'Ram',
//     age:25
//     },{
//         name:'Carl',
//         age:37
//     }
// ], (error,result) => {
//   if(error){
//       console.log("Unable to insert documents!")
//   }

//   console.log(result.ops)
// })


// db.collection('tasks').insertMany([{
//     description:'First task',
//     completed:true
//     },{
//         description:'Second task',
//         completed:false
//     },{
//         description:"Third task",
//         completed:true
//     }
// ], (error,result) => {
//   if(error){
//       console.log("Unable to insert documents!")
//   }

//   console.log(result.ops)
// })

//  db.collection('users').findOne({_id: new ObjectID("6298c6746e4d0912989fba84")}, (error, user) => {
//    if(error){
//        return console.log('Unable to fetch user')
//    }

//    console.log(user)
//  })

//  db.collection('users').find({age:20}).toArray((error, users) => {
//      console.log(users)
//  })


// db.collection('tasks').findOne({_id: new ObjectID("6298c7f8e38e99452cf0c5e0")}, (error, task) => {
//     if(error){
//         return console.log('Unable to fetch task')
//     }
 
//     console.log(task)
//   })
 

//  db.collection('tasks').find({completed:false}).toArray((error, tasks) => {
//     console.log(tasks)
// })

// db.collection('users').updateOne({ _id: new ObjectID("6298c21f51eaff1dac9e4f1f")},
//   {
//       $inc:{
//           age:1
//       }
//   }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// }) 


// db.collection('tasks').updateMany({ completed:false},
//   {
//       $set:{
//           completed:true
//       }
//   }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// }) 


db.collection('tasks').deleteOne({ description:"Second task"}).then((result) => {
      console.log(result)
  }).catch((error) => {
      console.log(error)
  }) 
  

})