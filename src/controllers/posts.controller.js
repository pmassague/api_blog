import { insert, selectAll, selectById } from "../models/posts.model.js";

//Recuperar todos los posts (incluyendo los datos del autor de cada post)
const getAll = async (req, res) => {
    const posts = await selectAll();
    res.json(posts);
}

//Recuperar un post a través de su ID (incluyendo los datos del autor del post)
const getById = async (req, res) => {
    const { idPost } = req.params;

    const post = await selectById(idPost);

    if (!post) {
        return res.status(404).json({
            message: 'El post con ese ID no existe'
        })

    }
    res.json(post);
}

//Crear un nuevo post
const create = async (req, res) => {
    const result = await insert(req.body);
    const post = await selectById(result.insertId);
    res.status(201).json(post);
}

export {
    getAll, getById, create
}