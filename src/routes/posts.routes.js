import { Router } from "express";
import { create, getAll, getById } from "../controllers/posts.controller.js";
import { validatePost } from "../middlewares/posts.middleware.js";
import { checkAutorId } from "../middlewares/autores.middleware.js";

const router = Router();

router.get('/', getAll);
router.get('/:idPost', getById);

router.post('/', validatePost, checkAutorId, create);

export default router;