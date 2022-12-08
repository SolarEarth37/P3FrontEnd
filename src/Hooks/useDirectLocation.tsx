import { useContext, useEffect, useState } from "react";
import { Context } from "../Context";

export default function useLoginID() {
    const { isLoggedIn } = useContext(Context);
    const [redirectString, setRedirectString] = useState<string>("/")

    useEffect(() => {
        if (isLoggedIn) {
            setRedirectString("/menu")
        } else {
            setRedirectString("/")
        }

    }, [isLoggedIn])
    return redirectString
}
