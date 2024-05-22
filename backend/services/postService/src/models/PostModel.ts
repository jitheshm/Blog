import mongoose, { Types } from "mongoose";


export interface IPost {
    title: string;
    tag: string;
    content: string;
    thumbnail?: string;


}

interface postDoc extends IPost, mongoose.Document {
    userId: Types.ObjectId;
    dateOfPost: Date;
}

const PostSchema = new mongoose.Schema({
    title: { type: String, require: true },
    tag: { type: String, require: true },
    content: { type: String, require: true },
    thumbnail: { type: String },
    userId: { type: Types.ObjectId, require: true },
    dateOfPost: { type: Date, required: true, default: Date.now },
});

const Post = mongoose.model<postDoc>('Post', PostSchema);
export default Post

