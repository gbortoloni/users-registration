import mongoose from 'mongoose';

export default function(): void {
  mongoose
    .connect('mongodb://localhost/typescript', {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Connecting to MongoDB...'))
    .catch(err => console.log('Connection falied...', err.message));
}
