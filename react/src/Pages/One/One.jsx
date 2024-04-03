import { useState, useEffect } from 'react'
import { getOne } from '../../Services/userService'

const One = () => {
    const [user,setUser]= useState({})
    const handleUsers= async()=>{

        const res =await getOne()
        console.log(res)
        setUser(res)
    }
    useEffect(()=> {handleUsers()},[])

  return (
    <>
    <h1>One</h1>
    {user && (
            <div >
                <p>{user._id}</p>
                <p>{user.name && user.name.lastname}</p>
                

            </div>

        )}
    </>
  )
}

export default One