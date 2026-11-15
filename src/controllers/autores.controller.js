import { insert, selectAll, selectById } from "../models/autores.model.js";

const getAll = async (req, res) => {
    const autores = await selectAll();
    res.json(autores);
}

const getById = async (req, res) => {
    const { idAutor } = req.params;

    const autor = await selectById(idAutor);

    if (!autor) {
        return res.status(404).json({
            message: 'El autor con ese ID no existe'
        })

    }

    res.json(autor);
}

const create = async (req, res) => {
    const result = await insert(req.body);
    const autor = await selectById(result.insertId);
    res.json(autor);

}

export {
    getAll, getById, create
}