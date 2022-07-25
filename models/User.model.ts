import mongoose, { Model, Schema } from 'mongoose';

export interface User {
    name: string;
    last_name: string;
    email: string;
    password: string;
    is_active?: boolean;
    createdAt?: number;
}

const userSchema = new Schema({
    name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    is_active: { type: Boolean },
    createdAt: { type: Number }
});

export const UserModel: Model<User> = mongoose.models.User || mongoose.model('User', userSchema);