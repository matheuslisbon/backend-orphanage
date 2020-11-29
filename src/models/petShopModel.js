const mongoose = require('mongoose')

const PetShopSchema = mongoose.Schema({
  produto:{
    type:String,
    require:true
  },
  valor:{
    type:Number,
    require:true
  },
  categoria:{
    type:String,
    require:true
  },
  cor:{
    type:String,
    require:false
  },
  tamanho:{
    type:String,
    require:false
  },
  foto:{
    type:String,
    require:true
  }
})

const petShopModel = mongoose.model('petshop', PetShopSchema)

module.exports = petShopModel