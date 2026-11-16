const CATEGORIAS_VALIDAS = ['NUTRICION', 'EJERCICIO', 'MINDFULNESS', 'NATURALEZA'];

const validatePost = (req, res, next) => {
    const { titulo, descripcion, categoria, autor_id } = req.body || {};

    // Validar titulo (obligatorio y máximo 100 caracteres)
    if (!titulo || typeof titulo !== 'string' || titulo.trim() === '') {
        return res.status(400).json({
            message: 'El campo titulo es obligatorio.'
        });
    }
    if (titulo.trim().length > 100) {
        return res.status(400).json({
            message: 'El campo titulo no puede superar los 100 caracteres.'
        });
    }

    // Validar descripcion (obligatorio y máximo 255 caracteres)
    if (!descripcion || typeof descripcion !== 'string' || descripcion.trim() === '') {
        return res.status(400).json({
            message: 'El campo descripcion es obligatorio.'
        });
    }
    if (descripcion.trim().length > 255) {
        return res.status(400).json({
            message: 'El campo descripcion no puede superar los 255 caracteres.'
        });
    }

    // Validar y normalizar categoria contra el ENUM (acepta tildes y minúsculas)
    if (!categoria || typeof categoria !== 'string' || categoria.trim() === '') {
        return res.status(400).json({
            message: `El campo categoria es obligatorio. Valores permitidos: ${CATEGORIAS_VALIDAS.join(', ')}`
        });
    }

    const categoriaNormalizada = categoria
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toUpperCase();

    if (!CATEGORIAS_VALIDAS.includes(categoriaNormalizada)) {
        return res.status(400).json({
            message: `La categoría '${categoria}' no es válida. Valores permitidos: ${CATEGORIAS_VALIDAS.join(', ')}`
        });
    }

    // Validar formato básico de autor_id (su existencia en la BBDD la comprueba checkAutorId)
    if (!autor_id || isNaN(Number(autor_id))) {
        return res.status(400).json({
            message: 'El campo autor_id es obligatorio y debe ser un número válido.'
        });
    }

    req.body.titulo = titulo.trim();
    req.body.descripcion = descripcion.trim();
    req.body.categoria = categoriaNormalizada;

    next();
};

export {
    validatePost
};
