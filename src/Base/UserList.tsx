import React, { useEffect, useState } from 'react'
import User from '../Composite/User'
import getUsers from '../Hooks/useGetUsers'

interface UserData {
    Name?: string,
    PhoneNumber?: number,
    Email?: string

}
export default function UserList() {
  const [allUsers, setAllUsers] = useState<UserData[]>([])
  useEffect(()=>{
    getUsers().then(res => {
      console.log(res)
      setAllUsers(res)
    })
  },[])
    
  return (
    <>
        {allUsers.map((element, i) => (
            <User key={i} name={element?.Name} phone={element.PhoneNumber} email={element?.Email} />
        ))}
    </>
  )
}
