const {MongoClient} = require('mongodb');

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect('mongodb+srv://lisbon:88134824@cluster0.4ikfz.mongodb.net/backend-orphanage-test?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true 
    });
    db = await connection.db('backend-orphanage-test');
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  beforeEach(async()=>{
    const userDb = db.collection('users')
    const animalDb =  db.collection('animals')
    await userDb.deleteMany({})
    await animalDb.deleteMany({})
    })

  it('should insert a doc into collection users', async () => {
    const users = db.collection('users');

    const mockUser = {_id: 'some-user-id', 
    nome: 'John', 
    estado: "test", 
    cidade:"Recife",
    telefone:"81 9 88134824",
    user:"test",
    email:"matheuszicatop523@gmail.com",
    password:"123456789"
    };

    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({_id: 'some-user-id'});
    expect(insertedUser).toEqual(mockUser);
  });

  it('should insert a doc into collection Animals',async ()=>{
    const Animals = db.collection('animals');

    const fakeAnimal = {
      _id: 'some-user-id', 
      nome: 'Animal Nome',
      idade:'2',
      especie:'cão',
      raca: 'Pinscher',
      user_id:'Matheus',
      fotos:['Data']
    }
  
    await Animals.insertOne(fakeAnimal)


    const animalCreated = await Animals.findOne({_id:'some-user-id'})
    expect(animalCreated).toEqual(fakeAnimal)

  })
});