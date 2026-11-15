import { insert, selectAll, selectByAutorId, selectById } from "../models/posts.model.js";

const getAll = async (req, res) => {
    const posts = await selectAll();
    res.json(posts);
}

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

const getByAutorId = async (req, res) => {
    const { idAutor } = req.params;

    const posts = await selectByAutorId(idAutor);

    if (posts.length === 0) {
        return res.status(404).json({
            message: 'No existe ningún post para ese ID de autor'
        })

    }

    res.json(posts);
}

const create = async (req, res) => {
    const result = await insert(req.body);
    const post = await selectById(result.insertId);
    res.json(post);

}

export {
    getAll, getById, getByAutorId, create
}