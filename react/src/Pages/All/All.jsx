import React, { useEffect, useState } from 'react'
import { getAll } from '../../Services/userService'

const All = () => {

    const [users,setUsers]=useState([])

    const handleUsers= async()=>{

        const res =await getAll()
        setUsers(res)
    }
    useEffect(()=> {handleUsers()},[])

  return (
    <>
    <h1>All</h1>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoHxmXDe3zE4PYXWX0Yx2GY0Z86rS_JIzIBkNfkDPU6Q&s"/>

    {users && users.map((user,idx)=>{
        return (
            <div key={idx}>
                <p>{user._id}</p>

                <p>{user.username}</p>
                <p>{user._id}</p>

            </div>

        )

    })}


    </>
  )
}

export default All