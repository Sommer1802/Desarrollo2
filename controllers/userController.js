import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

class UserController {
    async login(req, res) {
        const { email, password } = req.body;

        try {
            // Busca el usuario en la base de datos
            const user = await userModel.findByEmail(email);

            if (!user || user.password !== password) {
                return res.status(401).json({ message: 'Credenciales incorrectas' });
            }

            // Verifica si es administrador (opcional)
            if (!user.isAdmin) {
                return res.status(403).json({ message: 'No tienes permisos de administrador' });
            }

            // Genera un token
            const token = jwt.sign(
                { id: user._id, email: user.email, role: 'admin' },
                process.env.JWT_SECRET,
                { expiresIn: '2h' }
            );

            // (Opcional) Guarda el token en la base de datos
            await userModel.updateUserToken(email, token);

            // Devuelve el token al frontend
            res.json({ token });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }
}

export default new UserController();
