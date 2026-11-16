import { Router } from "express";
import { create, getAll, getByAutorId, getById } from '../controllers/autores.controller.js';
import { checkAutorId, validaAutor } from "../middlewares/autores.middleware.js";

const router = Router();

router.get('/', getAll);
router.get('/:idAutor', checkAutorId, getById);
router.get('/:idAutor/posts', checkAutorId, getByAutorId);

router.post('/', validaAutor, create);

export default router;
