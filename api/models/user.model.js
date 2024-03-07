import mongoose from 'mongoose';

const userSchema=new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
            
        },
    },{timestamps:true}

    //{timestamps:true}-->well we want save two thing  while we are adding a new users the time of creation and the time of update 
    //so we need these informations later in our applications to  sort .for example post the users etc...  After doing ths mongodb store two extra information
);

const User=mongoose.model('User',userSchema);
export default User;

