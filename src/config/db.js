import { createPool } from "mysql2/promise";

const pool = createPool({
    user: 'root',
    password: 'Pamara_12345',
    host: 'localhost',
    port: 3306,
    database: 'blog_db'
});

export default pool;