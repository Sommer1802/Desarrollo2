import { ObjectId } from 'mongodb';
import db from '../db.js';

class movieModel {
    
    async create(pelicula){
        const peliculas =  db.db.collection('peliculas');
        return await peliculas.insertOne(pelicula);
    }

    async update(id, pelicula){
        const peliculas = db.db.collection('peliculas');
        return await peliculas.updateOne({_id: new ObjectId (id)},{$set: pelicula});
    }

    async delete(id){
        const peliculas = db.db.collection('peliculas');
        return await peliculas.deleteOne({_id: new ObjectId (id)});
    }

    async getAll(){
        const peliculas =  db.db.collection('peliculas');
        return await peliculas.find({}).toArray();
    }

    async getOne(id){
        const peliculas = db.db.collection('peliculas');
        return await peliculas.findOne({_id: new ObjectId (id)})
    }
}

export default new movieModel;