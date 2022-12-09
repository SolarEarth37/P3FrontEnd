import React from 'react'
import User from '../Composite/User'
import useGetUsers from '../Hooks/useGetUsers'

interface UserData {
    name?: string,
    phone?: number,
    email?: string

}
export default function UserList() {

    let AllLoans: UserData[] = useGetUsers()
  return (
    <>
        {AllLoans?.map((element, i) => (
            <User key={i} name={element?.name} phone={element.phone} />
        ))}
    </>
  )
}
