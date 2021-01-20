const request = require('supertest')
const app = require('../app')


describe('Should Test a router', ()=>{

  beforeAll(async () => {
    console.log('Iniciando TDD com jest!');
 });

  afterAll(() => {
    //o server close irá encerrar nossa aplicação, evitando problemas da porta já estar em uso
  app.close();
  console.log('servidor fechado');
  });



  it('Test Index Router', async ()=>{
    const response = await request(app).get('/')
    expect(response.status).toBe(200)

  })
  it('Should Test a Router Create Animal Post', async ()=>{
    const response = await request(app).post('/').send({
       nome:'Test Jest', idade:'Test Jest', especie:'Test Jest', raca:'Test Jest', fotos:['AAA'], user_id:'Test Jest',
    })

    expect(response.body.nome).toEqual('Test Jest')
    expect(response.status).toBe(201)
  })

  it('should Test Router PetShop', async()=>{
    const response = await request(app).get('/petshop')

    expect(response.status).toBe(200)
  })
  it('should Test Router Petshop Create A Product', async () => {
    const product = {
      
        produto:'5', valor:50, categoria:'test', cor:'test', tamanho:'test', foto:'test'
      
    }
    const response = await request(app).post('/petshop').send(product)
    expect(response.status).toBe(201)
    expect(response.body.produto).toBe(product.produto)
  })

})
