import { useState } from 'react'

import './UserRow.css'

const UserRow = (props) => {
    const {eachUserDetails,deleteUser} = props

    const [nameOverflow, setOverflow] = useState(true)

    const collapsedOrExpanded = nameOverflow ? "collapsed" : ""

  
    const onClickDeleteUser = () =>deleteUser(eachUserDetails.id)
    return(
        <li className='users-list-item'>
            <p className='id-list-item'>{eachUserDetails.id}</p>
            <p className={`name-list-item  ${collapsedOrExpanded}`} onClick={()=>setOverflow(prev=> !prev)} >{eachUserDetails.name}</p>
            <p className={`email-list-item ${collapsedOrExpanded}`} onClick={()=>setOverflow(prev=> !prev)}>{eachUserDetails.email}</p>
            <button className='remove-button ' onClick={onClickDeleteUser} type="button" >X</button>
        </li>
    )
}

export default UserRow