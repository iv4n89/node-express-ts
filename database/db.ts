import mongoose from 'mongoose';

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnected
 */
const mongoConnection = {
    isConnected: 0
};

export const connect = async () => {
    if (mongoConnection.isConnected === 1) {
        return;
    }

    if (mongoose.connections.length > 0) {
        mongoConnection.isConnected = mongoose.connections[0].readyState;

        if (mongoConnection.isConnected === 1) {
            return;
        }

        await mongoose.disconnect();
    }

    await mongoose.connect(process.env.MONGO_URL || '');
    mongoConnection.isConnected = 1;
}

export const disconnect = async () => {
    if (process.env.ENVIRONMENT === 'development') return;

    if (mongoConnection.isConnected === 0) return;

    await mongoose.disconnect();
}