const mysql = require("mysql2")

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
})

db.getConnection((err, connection) => {
  if (err) {
    console.log("Database Connection Failed")
    console.log(err.message)
  } else {
    console.log("Database Connected Successfully")
    connection.release()
  }
})

module.exports = db