import db from '../config/db.js'

//select * from autores
const selectAll = async () => {
    const [result] = await db.execute('select * from autores');
    return result;
}

const selectById = async (idAutor) => {
    const [result] = await db.execute('select * from autores where id = ?', [idAutor]);

    if (result.length === 0) {
        return null;
    }
    return result[0];
}

const selectByAutorId = async (idAutor) => {
    console.log(idAutor);
    const [result] = await db.execute('SELECT p.*, a.nombre, a.email, a.imagen FROM posts p INNER JOIN autores a ON p.autor_id = a.id where p.autor_id = ?', [idAutor]);

    return result;
}

const selectByEmail = async (email) => {
    const [result] = await db.query('SELECT * FROM autores WHERE email = ?', [email]);
    if (result.length === 0) return null;
    return result[0];
};

const insert = async ({nombre, email, imagen}) => {
    const [result] = await db.execute('insert into autores (nombre, email, imagen) values (?, ?, ?)', [nombre, email, imagen]);

    return result;
}
 
export {
    selectAll, selectById, insert, selectByAutorId, selectByEmail
};
