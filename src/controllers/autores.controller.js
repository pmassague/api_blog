import { insert, selectAll, selectPostsByAutorId, selectById } from "../models/autores.model.js";

//Recuperar todos los autores
const getAll = async (req, res) => {
    const autores = await selectAll();
    res.json(autores);
}

//Recuperar un autor a través de su ID
const getById = async (req, res) => {
    res.json(req.autor);
}

//Recuperar todos los posts de un autor concreto (incluyendo los datos del autor)
const getPostsByAutorId = async (req, res) => {
    const posts = await selectPostsByAutorId(req.autor.id);
    res.json(posts);
}

//Crear un nuevo autor
const create = async (req, res) => {
    const result = await insert(req.body);
    const autor = await selectById(result.insertId);
    res.status(201).json(autor);
}

export {
    getAll, getById, getPostsByAutorId, create
}