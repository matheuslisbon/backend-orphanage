const Animals = require("../models/AnimalsOrphanages")


exports.createAnimal = async(req, res)=>{
  const {nome, idade, especie, raca, fotos, user_id, } = req.body
  if(!nome || !idade || !especie || !raca || !user_id){
    return res.status(400).send("eerr")
  }

  if(typeof(nome) !== 'string' || typeof(idade) !== 'string' || typeof(raca) !== 'string' || typeof(user_id) !== 'string') {
    return res.send('not created')
  }

  const animal = await Animals.create({nome, idade, especie, raca, fotos, user_id})
  .then(data =>{
    return res.status(201).send(data)
  })
  .catch(e =>{
    return res.status(400).send('error')
  })
}


exports.index = async(req, res)=>{
  const animals = await Animals.find().then(data =>{
    return res.status(200).send(data)
  })
  .catch(err =>{
    return res.status.send(err)
  })
}

exports.findAnimal = async(req, res)=>{
  const id = req.params.id
  if(!id || typeof(id) !== 'string'){
    return res.status(400).send('not created')
  }
  const animal = await Animals.findById({_id:id})
    .then(data => {
      return res.send(data)
    })
    .catch(e =>{
      return res.status(400).send('Not Invalidate')
    })
}

exports.deleteAnimal = async(req, res)=>{
  const id = req.params.id
  const animalDeleted = await Animals.findByIdAndDelete(id)
    .then(data=>{
      return res.status(200).json({data})
    })
    .catch(err =>{
      return res.status(400).json('Error Animal Not Found')
    })
}


exports.findUserAnimal = async(req, res)=>{
  const id = req.params.id
  if(!id || typeof(id) !== 'string'){
    return res.status(400).send('not created')
  }
  const animal = await Animals.find({user_id:id})
    .then(data => {
      return res.status(200).send(data)
    })
    .catch(e =>{
      return res.status(403).send('Not Invalidate')
    })
}
