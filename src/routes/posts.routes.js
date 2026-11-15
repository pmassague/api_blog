import { Router } from "express";
import { create, getAll, getByAutorId, getById } from "../controllers/posts.controller.js";

const router = Router();

router.get('/', getAll);
router.get('/:idPost', getById);
router.get('/autor/:idAutor', getByAutorId);

router.post('/', create);

export default router;