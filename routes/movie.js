import express from 'express'
import movieController from '../controllers/movieController.js';
const route = express.Router();

route.post('/', movieController.create);
route.get('/:id', movieController.getOne);
route.get('/',movieController.getAll);
route.put('/:id',movieController.update);
route.delete('/:id',movieController.delete);

export default route;