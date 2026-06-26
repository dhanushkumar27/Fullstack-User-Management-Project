import {useState, useEffect} from 'react'

import UserForm from '../../components/UserForm/UserForm.jsx'
import UserTabel from '../../components/UserTabel/UserTabel.jsx'
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} from '../../services/UserServices/UserServices.jsx'

import './HomePage.css'

const HomePage = () => {
  const [users, setUsers] = useState([])
  const [name, setName] = useState("")
  const [id, setId] = useState("")
  const [email, setEmail] = useState("")


  const onChangeName = setName  //short from 
  /*instead of 
    const onChangeName = (value) => {
    setName(value)
    }
  */

  const onChangeEmail = setEmail

  const onChangeId = setId

   const getUserDetails = async () => {
    const data = await getUsers()
    setUsers(data)
  }


  useEffect(()=>{
    getUserDetails();
  },[])

 

  const onAddUser = async () => {
    const userDetails = {name,email}
    await createUser(userDetails)
    setEmail("")
    setName("")
    getUserDetails()

  }

  const onUpdateUser = async (updatedUser) => {
   
      await updateUser(updatedUser)
      setEmail("")
      setName("")
      setId("")
      getUserDetails()
      }
    
  

  const deleteTheUser = async (id) => {
    
    await deleteUser(id)

    getUserDetails()
  }


  return(
      <div className='homePage-main-container'>
        <div className="homePage-container">
          <h1 className='homePage-main-heading'>User Management</h1>
            <UserForm 
              name={name}
              id={id}
              email={email}
              users={users}
              onChangeName={onChangeName}
              onChangeEmail={onChangeEmail}
              onChangeId={onChangeId}
              onAddUser = {onAddUser}
              onUpdateUser = {onUpdateUser}
              
              />
            <UserTabel usersList={users} deleteTheUser={deleteTheUser}/>
          </div>
      </div>
    )

  }


export default HomePage
