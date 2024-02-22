const mongoose = require('mongoose')
const Chat = require("./modals/Chat")




main()
.then(()=>console.log('connection successful'))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let allChats = [
    {
        from : 'neha',
        to:'priya',
        msg : ' send me your exam sheet',
        created_at : new Date( )
    },
    {
        from : 'rup',
        to:'rahul',
        msg : ' send me your exam sheet',
        created_at : new Date( )
    },
    {
        from : 'pooja',
        to:'rup',
        msg : ' send me your exam sheet',
        created_at : new Date( )
    },
    {
        from : 'niva',
        to:'rahul',
        msg : ' send me your exam sheet',
        created_at : new Date( )
    },
    {
        from : 'gita',
        to:'pori',
        msg : ' send me your exam sheet',
        created_at : new Date( )
    },
]

Chat.insertMany(allChats)

