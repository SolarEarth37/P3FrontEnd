import { useMailSender } from '../emailSender'

interface User {
    name: string,
}

export default function useSendMail(name: User) {

    useMailSender(name);
}