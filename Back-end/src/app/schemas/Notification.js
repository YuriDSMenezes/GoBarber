import mongoose from 'mongoose';

// campos no mongoDB
const NotificationSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user: {
      type: Number,
      required: true,
    },
    read: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true, // cria o created_at e update_at
  }
);

export default mongoose.model('Notification', NotificationSchema); // 'nome' do schema
