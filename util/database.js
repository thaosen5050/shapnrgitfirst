const mysql =required('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'war40000'
});

module.exports = pool.promise();