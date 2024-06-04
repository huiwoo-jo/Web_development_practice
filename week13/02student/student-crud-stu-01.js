// ./02student/student-crud.js
const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://admin:1234@cluster0.t3dchvm.mongodb.net/testDB?retryWrites=true&w=majority';
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log('DB Connected');

        const database = client.db('testDB');
        const collection = database.collection('students');
        
        // 추가
        const newUser = { name: 'huiwoo-jo', age: 23, email: 'huiwoo-jo@gmail.com'};
        const insertResult = await collection.insertOne(newUser);
        users = await collection.find({}).toArray();
        console.log('입력 완료\n문서 검색: ', users);
        

        // 검색
        users = await collection.find({}).toArray();
        console.log('문서 검색: ', users);


        // 수정
        const updatedUser = await collection.findOneAndUpdate(
            { name: 'huiwoo-jo' },
            { $set: { age: 23 } },
            { email: 'huiwoo-jo@dongyang.ac.kr' }
        );
        users = await collection.find({}).toArray();
        console.log('수정 완료\n수정된 문서:  ', updatedUser);

        // 삭제
        const deleteResult = await collection.deleteMany({ name: "huiwoo-jo" });
        console.log('삭제 완료');
        

        await client.close();
    } catch(err){
      console.error(err);
    }
};

run();