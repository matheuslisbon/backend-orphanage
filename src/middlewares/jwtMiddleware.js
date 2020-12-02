const jwt = require('jsonwebtoken')

module.exports = (req, res, next) =>{
  const {authorization} = req.headers
  
  if(!authorization) {
    return res.status(403).json('Login required')
  }

  const [texto, token] = authorization.split(' ')

  try {
    const dados = jwt.verify(token, 'secret')
    const {id} = dados
    req.userId = id
    next()
  } catch (error) {
    return res.status(403).json('Token Invalid')
  }
} 