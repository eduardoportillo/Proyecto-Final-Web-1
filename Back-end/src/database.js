const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    password: '8450706183',
    database: 'marketplis',
    port: '5432' 
});


module.exports = pool;

