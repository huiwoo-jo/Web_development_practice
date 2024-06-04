// ./03person/user-crud.js
const express = require("express");
const bodyParser = require("body-parser");
const User = require("./models/userModel");
const { default: mongoose} = require("mongoose");

const app = express();
app.use(bodyParser.json());

mongoose.set("strictQuery", false);

app.listen(3000, async () => {
    console.log("3000번 포트에서 서버 실행중");
    const mongodbUri = 'mongodb+srv://admin:1234@cluster0.t3dchvm.mongodb.net/testDB?retryWrites=true&w=majority';
    mongoose.connect(mongodbUri).then(console.log('DB Connected'));
});

// user 전체 정보 검색
app.get('/user', async (req, res) => {
    const user = await User.find( {} );
    console.log(user);
    res.send(user);
});

// 특정 name 으로 검색
app.get('/uer/:name', async (req, res) => {
    const user = await User.findOne(
        {name:req.params.name}
    );
    console.log(user);
    res.send(user);
});

// 추가
app.post('/user', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send(user);
});

// 수정
app.put('/user/:name', async (req, res) => {
    const user = await User.findOneAndUpdate(
        {name: req.params.name}, {$set: req.body}, {new: true}
    );
    console.log(user);
    res.send(user);
});

// 삭제
app.delete('/user/:name', async (req, res) => {
    await User.deleteMany({name:req.params.name});
    res.send({success:true});
});

