import { Router } from "express";
import { create, getAll, getById } from '../controllers/autores.controller.js';

const router = Router();

router.get('/', getAll);
router.get('/:idAutor', getById);

router.post('/', create);

export default router;
