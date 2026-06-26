import { useState } from 'react'

import UserRow from '../UserRow/UserRow.jsx'
import './UserTabel.css'

const UserTabel = (props) => {
    const {usersList=[],deleteTheUser} = props
    const deleteUser = (id) => deleteTheUser(id)

    return(
        <div className='user-details-container'>
            <ul className="users-unorder-list-container">
              <li className='users-list-item'>
                <p className='id-list-item initial-list-para'>ID</p>
                <p className='name-list-item initial-list-para'>NAME</p>
                <p className='email-list-item initial-list-para'>EMAIL</p>
              </li>
              {usersList.map(eachUserDetails => (
                  <UserRow eachUserDetails={eachUserDetails}
                    deleteUser={deleteUser}
                    key={eachUserDetails.id}/>
                ))}
            </ul>
        </div>
    )
} 

export default UserTabel