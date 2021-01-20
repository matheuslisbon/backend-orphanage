require('dotenv').config()
const {MongoClient} = require('mongodb');


describe('import', ()=>{
  let connection;
  let db;
  beforeAll(async () => {
    connection = await MongoClient.connect(`mongodb+srv://lisbon:${process.env.DB_PASS_TEST}@cluster0.4ikfz.mongodb.net/${process.env.DB_NAME_TEST}?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true 
    });
    db = await connection.db('backend-orphanage-test');
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });
  it('test', ()=>{
    expect(1).toBe(1)
  })




})