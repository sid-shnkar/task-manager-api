const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const Task = require('./task')

const userSchema=new mongoose.Schema({
    name:{
type:String,
required:true,
trim:true
    },
    email:{
  type:String,
  unique:true,
  required:true,
  trim:true,
  lowercase:true,
  validate(value){
      if(!validator.isEmail(value)){
          throw new Error("Email is Invalid")
      }
  }
    },
    age:{
type:Number,
default:0,
validate(value) {
    if(value < 0){
        throw new Error('Age must be a positive number')
    }
}
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:7,
        validate(value){
            if(value.toLowerCase().includes("password")){
                throw new Error('Password should not contain phrase "password" ')
            }
        }
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }],
    avatar:{
        type:Buffer
    }
},{
timestamps:true
  
})

userSchema.virtual('tasks', {
    ref:'Task',
    localField:'_id',
    foreignField:'owner'
})

userSchema.methods.toJSON=function() {
    const user=this
    const userObject=user.toObject()

    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar

    return userObject
}

//for generating token for user based on his/her id
userSchema.methods.generateAuthToken=async function(){
    const user=this
    const token=jwt.sign({_id:user._id.toString()}, process.env.JWT_SECRET)

    user.tokens=user.tokens.concat({token})
    await user.save()

    return token
}


userSchema.statics.findByCredentials=async (email,password) => {
    const user=await User.findOne({email})

    if(!user){
        throw new Error('Unable to login')
    }

    const isMatch=await bcrypt.compare(password, user.password)

    if(!isMatch){
        throw new Error('Unable to login')
    }

    return user
}


//Hashing before the file is saved
userSchema.pre('save', async function(next) {
    const user=this

    if(user.isModified('password')){
        user.password=await bcrypt.hash(user.password, 8)
    }

    next()
})



// const me=new User({
//     name:'Shyam',
//     email:"raki@gmail.com ",
//     password:"Hanuman*1008 "
// })

// me.save().then(() => {
// console.log(me)
// }).catch((error) => {
// console.log("Error: ",error)
// })

userSchema.pre('remove', async function (next) {
    const user=this
    await Task.deleteMany({owner: user._id})
    next()
})

const User=mongoose.model('User', userSchema)

module.exports=User