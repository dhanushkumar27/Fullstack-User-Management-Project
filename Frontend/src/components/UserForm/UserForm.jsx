import {useState} from 'react'


import './UserForm.css'

const UserForm = (props) =>{
    const {users,name,email,id,onChangeName,onChangeEmail, onChangeId,onAddUser,onUpdateUser} = props
    const [addUserOption,setAddUserOption] = useState(true)
    const [updateUserOption, setUpdateUserOption] = useState(false)

    const [showIdErrorFound, setShowIdErrorFound] = useState(false)
    const [showNameErrorFound, setShowNameErrorFound] = useState(false)
    const [showEmailErrorFound, setShowEmailErrorFound] = useState(false)

    const [showInputContainer, setShowInputContainer] = useState(true)
    
    const addUser = () =>{
      if(name === ""){
        setShowNameErrorFound(true)
      }else{
        setShowNameErrorFound(false)
      }
      if(email === ""){
        setShowEmailErrorFound(true)
      }else{
        setShowEmailErrorFound(false)
      }
      if(name !== "" && email !== ""){
        onAddUser()
      }
    } 

    const updateUser = () => {
      
      if(id === ""){
        setShowIdErrorFound(true)
      }else{
        const previousUserDetails = users.find(eachUser => eachUser.id === Number(id))
        const updatedUser ={
          id: Number(id),
          name: name || previousUserDetails.name,
          email: email || previousUserDetails.email
        }
        setShowIdErrorFound(false)
        onUpdateUser(updatedUser)
      }
    }

    
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
    <>
    {!showInputContainer && <button className='form-open-button' onClick={()=>setShowInputContainer(true)}>Open</button>}
      {showInputContainer && 
      <div className='input-container'>
                    <div className='checkbox-input-container'>
                      <div className='checkbox-input-card'>
                        <label className='checkbox-label' htmlFor="addUser" >Add Users</label>
                        <input className='checkbox-input' checked={addUserOption} onChange={onClickaddUserCheckbox} id="addUser" type="checkbox"/>
                        <label className='checkbox-label' htmlFor="updateUser" >Update User</label>
                        <input className='checkbox-input' checked={updateUserOption} onChange={onClickUpdateUserCheckbox} id="updateUser" type="checkbox"/>
                      </div>
                      <button className="form-close-button" onClick={()=>setShowInputContainer(false)}>Close</button>
                    </div>
                    

                    {updateUserOption && 
                    <div className="input-field-container">
                        <div className='input-field-card'>
                          <label className='text-label-element' htmlFor="id">Id :</label>
                          <input className="text-input" id="id" type="text" value={id} placeholder='Enter Id' onChange={changeId}/>
                      </div>
                      {showIdErrorFound && <p className='enter-error-text'>Enter Id</p>}
                    </div>}
                      

                    <div className="input-field-container">
                      <div>
                        <label className='text-label-element' htmlFor="name">Name :</label>
                      <input className="text-input" id="name" type="text" value={name} placeholder='Enter Name' onChange={changeName}/>
                      </div> 
                      {(showNameErrorFound && addUserOption) && <p className="enter-error-text">Enter Name</p>}
                    </div>
                    

                    <div className="input-field-container">
                      <div>
                        <label className='text-label-element' htmlFor="email">Email :</label>
                    <input className="text-input" id="email" type="text" value={email} placeholder='Enter Email' onChange={changeEmail}/>
                      </div>
                       {(showEmailErrorFound && addUserOption) && <p className="enter-error-text">Enter Email</p>}
                    </div>

                    {addUserOption && <button className="user-button" type="button" onClick={addUser}>Add User</button>}
                    {updateUserOption &&  <button className="user-button" type="button" onClick={updateUser}>Update User</button>}
                   
                
      </div>}
    </>
    )}

export default UserForm