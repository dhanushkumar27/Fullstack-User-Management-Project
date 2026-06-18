import {useState} from 'react'

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
  const [users, setUsers] = useState([{
    id: 1,
    name: "Raju",
    email: "raju@gmail.com"
  },
  {
    id: 2,
    name: "Kiran",
    email: "kiran@gmail.com"
  }])
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

  const onAddUser = () => {
  }

  const onUpdateUser = () => {
  }

  return(
      <div className='homePage-main-container'>
        <div className="homePage-container">
          <h1 className='homePage-main-heading'>User Management</h1>
            <UserForm 
              name={name}
              id={id}
              email={email}
              onChangeName={onChangeName}
              onChangeEmail={onChangeEmail}
              onChangeId={onChangeId}
              onAddUser = {onAddUser}
              onUpdateUser = {onUpdateUser}
              />
            <UserTabel usersList={users}/>
          </div>
      </div>
    )

}

export default HomePage
