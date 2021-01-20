const petShopModel = require("../models/petShopModel")

exports.createProductPetShop = async(req, res)=>{

  const {produto, valor, categoria, cor, tamanho, foto} = req.body

  if(typeof(produto) !== 'string' || typeof(valor) !== 'number' || typeof(categoria) !== 'string' ||typeof(cor) !== 'string' || typeof(tamanho) !== 'string' ||typeof(foto) !== 'string' ){
    return res.status(400).send('Error Intern')
  }

  const response = await petShopModel.create({
    produto, valor, categoria, cor, tamanho, foto}).then(data =>{
    return res.status(201).send(data)
  }).catch(err =>{
    return res.status(400).send('Error Intern')
  })
}

exports.listAllProducts = async(req, res)=>{
  await petShopModel.find().then(data =>{
    return res.status(200).send(data)
  }).catch(err =>{
    return res.status(500).send('Error Interno')
  })
}

exports.findProductById = async(req, res)=>{
  const id = req.params.id
  if(!id){
    return res.status(400).send('Error')
  }
  await petShopModel.findById(id)
    .then(data =>{
      return res.status(200).send(data)
    })
    .catch(err => {
      return res.status(400).send('Error invalid Id')
    })
}

exports.deleteProductById = async(req, res)=> {
  const id = req.params.id
  if(!id){
    return res.status(400).send('Error')
  }
  await petShopModel.findByIdAndDelete(id)
    .then(data =>{
      return res.status(200).send('Product Deleted')
    })
    .catch(err => {
      return res.status(500).send('Error invalid Id')
    })
}