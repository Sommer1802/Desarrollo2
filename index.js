import 'dotenv/config';
import express from 'express';
import cors from 'cors'; // Importa el middleware CORS
import movieRoutes from './routes/movie.js';
import userRoutes from './routes/user.js';
import bodyParser from 'body-parser';

const app = express();

// Configuración de CORS
app.use(
    cors({
        origin: 'http://localhost:4200', // Reemplaza con la URL de tu frontend
        methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
        credentials: true, // Permite el envío de cookies o encabezados personalizados
    })
);

// Configuración de middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use('/movies', movieRoutes);
app.use('/user', userRoutes);

// Manejo de errores generales
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo salió mal, inténtalo más tarde.' });
});

// Servidor
try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Servidor funcionando en el puerto ${PORT}`));
    } catch (e) {
    console.error('Error al iniciar el servidor:', e);
}
