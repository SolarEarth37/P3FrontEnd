import React, { useEffect, useState } from 'react'
import getUsers from '../Hooks/useGetUsers'
import Device, {DeviceData} from '../Composite/Device'
import useGetDevices from '../Hooks/useGetDevices'

export default function UserList() {
  const [allDevices, setAllDevices] = useState<DeviceData[]>([])
  useEffect(()=>{
    useGetDevices().then(res => {
      console.log(res)
      setAllDevices(res)
    })
  },[])
    
  return (
    <>
        {allDevices.map((element, i) => (
            <Device key={i} Name={element?.Name} Id={element.Id} />
        ))}
    </>
  )
}
