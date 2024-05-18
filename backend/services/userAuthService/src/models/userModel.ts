import mongoose from 'mongoose'

interface userDoc{
    name:string;
    email:string;
    password:string;
    dateOfJoin:Date;
}

const UserSchema = new mongoose.Schema({
  name:{type:String,require:true},
  email:{type:String,require:true},
  password:{type:String,require:true},
  dateOfJoin: { type: Date, required: true, default: Date.now },
});

const User = mongoose.model<userDoc>('User', UserSchema);
export default User

