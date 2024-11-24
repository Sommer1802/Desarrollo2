import { MongoClient } from "mongodb";
import 'dotenv/config'

class db {
    constructor() {
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=ProyectoFinal`;
        this.client = new MongoClient(queryString);
        this.conectarDB();
    }

    async conectarDB(){
        try {
            await this.client.connect();
            this.db = this.client.db('Cine');
            console.log("Conectado a la base de datos");
            
        } catch (e) {
            console.log(e);
            
        }
    }
}

export default new db;