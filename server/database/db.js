import mongoose from 'mongoose';


const Connection =  async(username, password)=>{

const URL=`mongodb+srv://${username}:${password}@crud-app.lfdmrim.mongodb.net/?retryWrites=true&w=majority`;

// mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true },)
// .then(()=>console.log("database connected"))
// .catch((error)=>{console.log('Error while connecting with the database', error);});

try{
    await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log("database connected");
}catch(error){
    console.log('Error while connecting with the database', error);
}
}

export default Connection;
