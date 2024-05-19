import mongoose from 'mongoose'

export interface IUser {
  name: string;
  email: string;
  password: string;

}

interface userDoc extends IUser, mongoose.Document {
  dateOfJoin: Date;
}

const UserSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  dateOfJoin: { type: Date, required: true, default: Date.now },
});

const User = mongoose.model<userDoc>('User', UserSchema);
export default User

