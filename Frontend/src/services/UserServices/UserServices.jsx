

const API_URL = "https://fullstack-user-management-project.onrender.com"

const getUsers = async () => {
    const response = await fetch(`${API_URL}/users`)
    const data = await response.json()
   
    return data
}

const createUser = async (userDetails) => {
    const createApi = `${API_URL}/users`

    const options = {
        method:'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(userDetails)
    }
    await fetch(createApi, options)

}


const updateUser = async (userDetails) => {
    const updateApi = `${API_URL}/users/${userDetails.id}`
    await fetch(updateApi,{
        method:'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(userDetails)
    })

}

const deleteUser = async (id) => {
    const deleteApi = `${API_URL}/users/${id}`
    await fetch(deleteApi,{
        method:'DELETE'
    })
}

export {getUsers, createUser, updateUser, deleteUser}