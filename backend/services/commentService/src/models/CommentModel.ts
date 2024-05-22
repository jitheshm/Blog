import mongoose, { Types } from "mongoose";


export interface IComment {
    comment: string;
}

interface CommentDoc extends IComment, mongoose.Document {
    userId: Types.ObjectId;
    postId: Types.ObjectId;
    dateOfComment: Date;
}

const commentSchema = new mongoose.Schema({
    comment: { type: String, require: true },
    postId: { type: Types.ObjectId, require: true },
    userId: { type: Types.ObjectId, require: true },
    dateOfComment: { type: Date, required: true, default: Date.now },
});

const Comment = mongoose.model<CommentDoc>('Comment', commentSchema);
export default Comment

