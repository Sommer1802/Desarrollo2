import movieModel from "../models/movieModel.js";

class movieController {
    constructor() {
        
    }

    async create(req, res){
        try {
            const data = await movieModel.create(req.body);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async update(req, res){
        try {
            const {id} = req.params;
            const data = await movieModel.update(id, req.body);
            res.status(200).json({data});
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async delete(req, res){
        try {
            const {id} = req.params;
            const data = await movieModel.delete(id);
            res.status(200).json({data});
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getAll(req, res){
        try {
            const data = await movieModel.getAll();
            res.status(201).json({data});
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getOne(req, res){
        try {
            const {id} = req.params;
            const data = await movieModel.getOne(id);
            res.status(201).json({data});
        } catch (e) {
            res.status(500).send(e);
        }
    }
}

export default new movieController();