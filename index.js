import 'dotenv/config'
import express from 'express';
import movieRoutes from './routes/movie.js';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/movies', movieRoutes);

try{
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () =>console.log("Funcionando en el puerto "+PORT))
} catch (e) {
    console.log(e);
}