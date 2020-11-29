const User = require('../models/UsersModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { ConnectionStates } = require('mongoose')

function generateToken ( params = {}){
  return jwt.sign(params, 'secret', {
    expiresIn: 86400
  })
}

exports.getUsers = (req, res)=>{
  console.log('')
  return res.status(200).send('Hellow Users Routes')
}

exports.createUser = async(req, res)=>{
  const {nome, estado, cidade, telefone, user, email, password} = req.body
  if(!nome || !estado || !cidade || !telefone || !user || !email || !password){
    return res.json('Not created, Data invalid').status(403)
  }
  const passHash = bcrypt.hashSync(password, 10)
  const dataUser = await User.create({nome, estado, cidade, telefone, user, email, password:passHash})
    .then(data =>{
      return res.status(201).json(data)
    })
    .catch(e => {
      return res.status(403).json(e)
    })
}


exports.login = async(req, res)=>{
  const {user, password} = req.body
  if(!user || !password){
    return res.status(403).json('Invalid Data')
  }
  
  const userData = await User.find({user})
  .then(data =>{
    if(bcrypt.compareSync(password, data[0].password)){
      return res.status(200).send({data, token: generateToken({id: data[0]._id})})
    } else{
      return res.status(403).json('Not Correct Password')
    }

  })
  .catch(e =>{
    return res.status(403).send('Error Login')
  })
}
