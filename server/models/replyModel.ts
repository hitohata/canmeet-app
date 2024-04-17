import mongoose, { Schema, Types } from 'mongoose';
import { User } from './userModel';
import { Comment } from './commentModel';

export type Reply = {
  _id: string;
  text: string;
  createdAt: string;
  user: User;
  comment: Comment;
}

const replySchema = new mongoose.Schema(
  {
    user: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: true
    },
    comment: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Comment', 
      required: true
    },
    text: { 
      type: String,
      required: true, 
    },
    createdAt: { 
      type: Date, 
      default: Date.now,
    },
  },
  { timestamps: true }
);


const Reply = mongoose.model<Reply>('Reply', replySchema);

export default Reply;