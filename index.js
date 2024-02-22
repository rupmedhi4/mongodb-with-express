const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const Chat = require("./modals/Chat")

app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname, 'public')));

main()
.then(()=>console.log('connection successful'))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chat1 = new Chat({
    from : 'neha',
    to:'priya',
    msg : ' send me your exam sheet',
    created_at : new Date( )
})

chat1.save().then((res)=>{
    console.log(res);
})

// index route
app.get('/chats',async (req,res)=>{
    let chats = await Chat.find()
    // console.log(chats);
    res.render('index.ejs',{chats});
})

//New Route
app.get('/chats/new',(req,res)=>{
    res.render('new.ejs')
})

app.get('/',(req,res)=>{
    res.send("root is working")
})


app.listen(4000,()=>{
    console.log('server is listening port 4000');
})
