import db from '../config/db.js'

//select * from autores
const selectAll = async () => {
    const [result] = await db.execute('select * from autores');
    return result;
}

//select los datos de un autor específico
const selectById = async (idAutor) => {
    const [result] = await db.execute('select * from autores where id = ?', [idAutor]);

    if (result.length === 0) {
        return null;
    }
    return result[0];
}

//select los posts de un autor específico con los datos del autor
const selectPostsByAutorId = async (idAutor) => {
    const [result] = await db.execute('SELECT p.*, a.nombre, a.email, a.imagen FROM posts p INNER JOIN autores a ON p.autor_id = a.id where p.autor_id = ?', [idAutor]);

    return result;
}

//select para saber si un email ya existe para utilizarlo en el middleware de validación
const selectByEmail = async (email) => {
    const [result] = await db.query('SELECT * FROM autores WHERE email = ?', [email]);
    if (result.length === 0) return null;
    return result[0];
};

//insert into para crear un nuevo autor 
const insert = async ({nombre, email, imagen}) => {
    const [result] = await db.execute('insert into autores (nombre, email, imagen) values (?, ?, ?)', [nombre, email, imagen]);

    return result;
}
 
export {
    selectAll, selectById, insert, selectPostsByAutorId, selectByEmail
};
