const mongoose = require('mongoose')

const AnimalSchema = mongoose.Schema({
  nome:{
    type:String,
    require:false
  },
  idade:{
    type:String,
    require:false
  },
  especie:{
    type:String,
    require:false
  },
  raca:{
    type:String,
    require:false
  },
  fotos:{
    type:Array,
    require:false,
  },
  user_id:{
    type:String,
    require:true
  }
})

const Animals = mongoose.model('Animals', AnimalSchema)

module.exports = Animals