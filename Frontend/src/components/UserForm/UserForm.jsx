import {useState} from 'react'


import './UserForm.css'

const UserForm = (props) =>{
    const {name,email,id,onChangeName,onChangeEmail, onChangeId,onAddUser,onUpdateUser} = props
    const [addUserOption,setAddUserOption] = useState(true)
    const [updateUserOption, setUpdateUserOption] = useState(false)
    
    const addUser = () => onAddUser()

    const updateUser = () => onUpdateUser(id)

    
    const changeName = (event) => onChangeName(event.target.value)

    const changeEmail = (event) => onChangeEmail(event.target.value)

    const changeId = (event) => onChangeId(event.target.value)


    
  const onClickaddUserCheckbox = () =>{
    setAddUserOption(true)
    setUpdateUserOption(false)
  }

  const onClickUpdateUserCheckbox = () =>{
    setUpdateUserOption(true)
    setAddUserOption(false)
  }

    return (
            <div className='input-container'>
                    <div className='checkbox-input-container'>
                    <label className='checkbox-label' htmlFor="addUser" >Add Users</label>
                    <input className='checkbox-input' checked={addUserOption} onChange={onClickaddUserCheckbox} id="addUser" type="checkbox"/>
                    <label className='checkbox-label' htmlFor="updateUser" >Update User</label>
                    <input className='checkbox-input' checked={updateUserOption} onChange={onClickUpdateUserCheckbox} id="updateUser" type="checkbox"/>
                    </div>
                    
                    {updateUserOption && <div>
                    <label className='text-label-element' htmlFor="id">Id :</label>
                    <input className="text-input" id="id" type="text" value={id} placeholder='Enter Id' onChange={changeId}/>
                    </div>}


                    <div>
                    <label className='text-label-element' htmlFor="name">Name :</label>
                    <input className="text-input" id="name" type="text" value={name} placeholder='Enter Name' onChange={changeName}/>
                    </div>
                    

                    <div>
                    <label className='text-label-element' htmlFor="email">Email :</label>
                    <input className="text-input" id="email" type="text" value={email} placeholder='Enter Email' onChange={changeEmail}/>
                    </div>

                    {addUserOption && <button className="user-button" type="button" onClick={addUser}>Add User</button>}

                {updateUserOption &&  <button className="user-button" type="button" onClick={updateUser}>Update User</button>}
            </div>

        )
}

export default UserForm