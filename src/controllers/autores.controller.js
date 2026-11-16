import { insert, selectAll, selectByAutorId, selectById } from "../models/autores.model.js";

const getAll = async (req, res) => {
    const autores = await selectAll();
    res.json(autores);
}

const getById = async (req, res) => {
    res.json(req.autor);
}

const getByAutorId = async (req, res) => {
    const posts = await selectByAutorId(req.autor.id);
    res.json(posts);
}

const create = async (req, res) => {
    const result = await insert(req.body);
    const autor = await selectById(result.insertId);
    res.status(201).json(autor);
}

export {
    getAll, getById, getByAutorId, create
}