const Pool = require('pg').Pool

const pool = new Pool({
    user: "postgres",
    password: "12345",
    host: "localhost",
    port: 5001,
    database: "node"
})

module.exports = pool