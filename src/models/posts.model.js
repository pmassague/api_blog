import db from '../config/db.js'

//select * from posts con los datos de los autores
const selectAll = async () => {
    const [result] = await db.execute('SELECT p.*, a.nombre, a.email, a.imagen FROM posts p INNER JOIN autores a ON p.autor_id = a.id');
 
    return result;
}

//select un post específico con los datos del autor
const selectById = async (idPost) => {
    const [result] = await db.execute('SELECT p.*, a.nombre, a.email, a.imagen FROM posts p INNER JOIN autores a ON p.autor_id = a.id where p.id = ?', [idPost]);

    if (result.length === 0) {
        return null;
    }
    return result[0];
}

//insert into para crear un nuevo post
const insert = async ({titulo, descripcion, categoria, autor_id}) => {
    const [result] = await db.execute('insert into posts (titulo, descripcion, categoria, autor_id) values (?, ?, ?, ?)', [titulo, descripcion, categoria, autor_id]);

    return result;
}
 

export {
    selectAll, selectById, insert
};
