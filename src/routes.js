const express = require('express')
const routes = express.Router()

const indexController = require('./controllers/indexController')
const usersController = require('./controllers/usersController')
const petShopController = require('./controllers/petShopController')

const jwtMiddleware = require('./middlewares/jwtMiddleware')


//Route Get Animals return The All Animals
routes.get('/', indexController.index)
// Route Post Animals Return Anima with Created
routes.post('/', indexController.createAnimal)
// Route get Anima return Animal Where id = id 
routes.get('/animal/:id', indexController.findAnimal)
// Route get By User id return Animals where User id
routes.get('/user/animal/:id', indexController.findUserAnimal)

//Route Delete Animal Where id = id
routes.delete('/animal/:id', indexController.deleteAnimal)
//Route Edit Animal Where id = id 

//--------------------------------------USERS ROUTERS -----------------------------------//

//Router Users
//Router Get Users
routes.get('/user', usersController.getUsers)
//Router Creted user
routes.post('/user', usersController.createUser)
//Router With on login
routes.post('/user/login', usersController.login)
routes.get('/user/profile/:id', jwtMiddleware, usersController.getUsers)

//--------------------------------------PETSHOP ROUTERS -----------------------------------//

routes.get('/petshop', petShopController.listAllProducts)
routes.post('/petshop', petShopController.createProductPetShop)
routes.get('/petshop/find/:id', petShopController.findProductById)
routes.delete('/petshop/delete/:id', petShopController.deleteProductById)


module.exports = routes