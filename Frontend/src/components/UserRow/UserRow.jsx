
import './UserRow.css'

const UserRow = (props) => {
    const {eachUserDetails,deleteUser} = props


    const onClickDeleteUser = () =>deleteUser(eachUserDetails.id)
    return(
        <li className='users-list-item'>
            <p className='id-list-item'>{eachUserDetails.id}</p>
            <p className='name-list-item'>{eachUserDetails.name}</p>
            <p className='email-list-item'>{eachUserDetails.email}</p>
            <button className='remove-button' onClick={onClickDeleteUser} type="button" >X</button>
        </li>
    )
}

export default UserRow