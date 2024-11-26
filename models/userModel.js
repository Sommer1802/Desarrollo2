import db from '../db.js';

class userModel {
    async create(user) {
        const usersCollection = db.db.collection('usuario');
        return await usersCollection.insertOne(user);
    }

    async findByEmail(email) {
        const usersCollection = db.db.collection('usuario');
        return await usersCollection.findOne({ email });
    }

    async updateUserToken(email, token) {
        const usersCollection = db.db.collection('usuario');
        return await usersCollection.updateOne({ email }, { $set: { token } });
    }
}

export default new userModel();
