import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from '../Context';

export default function useLogout() {
    const navigate = useNavigate();
    const { updateIsLoggedIn } = useContext(Context);

    useEffect(() => {
        updateIsLoggedIn(false);
        navigate("/");
    }, [navigate, updateIsLoggedIn])

    return;
}
