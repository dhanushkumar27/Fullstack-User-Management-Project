const userService = require("../services/userServices.js")

const getUsers = async (request, response) => {
  try {
    const users = await userService.getUsers()

    response.status(200).json(users)
  } catch (error) {
    response.status(500).json({
      message: error.message
    })
  }
}

const createUser = async (request, response) => {
  try {
    const { name, email } = request.body

    const result = await userService.createUser(
      name,
      email
    )

    response.status(201).json({
      message: "User Created Successfully",
      id: result.insertId
    })
  } catch (error) {
    response.status(500).json({
      message: error.message
    })
  }
}

const deleteUser = async (request, response) => {
  try {
    const { id } = request.params

    await userService.deleteUser(id)

    response.status(200).json({
      message: "User Deleted Successfully"
    })
  } catch (error) {
    response.status(500).json({
      message: error.message
    })
  }
}

const updateUser = async (request, response) => {
  try {
    const { id } = request.params
    const { name, email } = request.body

    await userService.updateUser(
      id,
      name,
      email
    )

    response.status(200).json({
      message: "User Updated Successfully"
    })
  } catch (error) {
    response.status(500).json({
      message: error.message
    })
  }
}

module.exports = {
  getUsers,createUser, deleteUser, updateUser
}