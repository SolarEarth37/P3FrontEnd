import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DeviceManagementVM from './pageVMs/DeviceManagementVM'
import FrontPageVM from './pageVMs/FrontPageVM'
import LoanViewVM from './pageVMs/LoanViewVM'
import LoginPageVM from './pageVMs/LoginPageVM'
import MenuPageVM from './pageVMs/MenuPageVM'

export default function MainVM() {
    return (
        <Routes>
            <Route path="/" element={<FrontPageVM />} />
            <Route path="device" element={<DeviceManagementVM />} />
            <Route path="loan" element={<LoanViewVM />} />
            <Route path="login" element={<LoginPageVM />} />
            <Route path="menu" element={<MenuPageVM />} />
        </Routes>
    )
}
