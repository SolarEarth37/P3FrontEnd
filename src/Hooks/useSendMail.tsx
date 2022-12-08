import React from 'react'
import { mailSender } from '../emailSender'

interface User {
    name: string,
}

export default function useSendMail(name: User) {
        
    mailSender(name);
}

export function sendMail() {
    useSendMail({ name: "test" });
}
