const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  nome:{
    type:String,
    require:true
  },
  estado:{
    type:String,
    require:true
  },
  cidade:{
    type:String,
    require:true
  },
  telefone:{
    type:String,
    require:true
  },
  user:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true,
    unique:true
  },
  password:{
    type:String,
    require:true
  },
})

const User = mongoose.model('user', UserSchema)

module.exports = User