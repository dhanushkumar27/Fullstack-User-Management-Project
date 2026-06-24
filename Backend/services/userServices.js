const db = require("../database/db")

const getUsers = () => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM users",
      (error, results) => {
        if (error) {
          reject(error)
        } else {
          resolve(results)
        }
      }
    )
  })
}
const createUser = (name, email) => {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [name, email],
      (error, results) => {
        if (error) {
          reject(error)
        } else {
          resolve(results)
        }
      }
    )
  })
}

const deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "DELETE FROM users WHERE id = ?",
      [id],
      (error, results) => {
        if (error) {
          reject(error)
        } else {
          resolve(results)
        }
      }
    )
  })
}

const updateUser = (id, name, email) => {
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE users SET name = ?, email = ? WHERE id = ?",
      [name, email, id],
      (error, results) => {
        if (error) {
          reject(error)
        } else {
          resolve(results)
        }
      }
    )
  })
}

module.exports = {
  getUsers, createUser, deleteUser, updateUser
}