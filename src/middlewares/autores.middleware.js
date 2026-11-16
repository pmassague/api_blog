import { selectByEmail, selectById } from "../models/autores.model.js";

/*  Middleware que comprueba si el idAutor existe
    Utiliza req.params si es llamada desde autores.routes
    Utiliza req.body si es llamada desde posts.routes */
const checkAutorId = async (req, res, next) => {
    const idAutor = req.params.idAutor || req.body?.autor_id;

    if (!idAutor) {
        return res.status(400).json({
            message: 'Es obligatorio indicar el ID del autor'
        });
    }

    const autor = await selectById(idAutor);
    if (!autor) {
        return res.status(404).json({
            message: 'No existe un autor con ese ID'
        });
    }

    req.autor = autor;
    next();
};

// Validar datos al crear un autor (POST /api/autores)
const validaAutor = async (req, res, next) => {
    const { nombre, email, imagen } = req.body || {};

    if (!nombre || typeof nombre !== 'string' || nombre.trim() === '') {
        return res.status(400).json({
            message: 'El campo nombre es obligatorio.'
        });
    }

    if (!email || typeof email !== 'string' || email.trim() === '') {
        return res.status(400).json({
            message: 'El campo email es obligatorio.'
        });
    }

    // Valida email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
        return res.status(400).json({
            message: 'El formato del email no es válido.'
        });
    }

    // Valida si existe un usuario registrado con ese email
    const emailLimpio = email.trim().toLowerCase();
    const autorExistente = await selectByEmail(emailLimpio);
    if (autorExistente) {
        return res.status(409).json({
            message: 'Ya existe un autor registrado con ese email.'
        });
    }

    // Valida la URL de la imagen (si se envía) 
    if (imagen !== undefined && imagen !== null && imagen.trim() !== '') {
        try {
            const urlObj = new URL(imagen.trim());
            if (urlObj.protocol !== 'http:' && urlObj.protocol !== 'https:') {
                return res.status(400).json({
                    message: 'La URL de la imagen debe empezar por http:// o https://'
                });
            }
            req.body.imagen = imagen.trim();
        } catch {
            return res.status(400).json({
                message: 'El formato de la URL de la imagen no es válido.'
            });
        }
    } else {
        req.body.imagen = null;
    }

    req.body.nombre = nombre.trim();
    req.body.email = emailLimpio;

    next();
};


export {
    checkAutorId, validaAutor
}

