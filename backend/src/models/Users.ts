import mongoose, { Document, Schema } from 'mongoose';

type Users = Document & {
  name: string;
  email: string;
};

const UsersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model<Users>('Users', UsersSchema);
