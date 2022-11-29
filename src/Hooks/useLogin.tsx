import { useContext, useEffect, useState } from "react";
import { Context } from "../Context";

interface Props {
    reload?: boolean;
}

export default function useLoginID({ reload = false }: Props) {
    const [userID, setUserID] = useState<number>();
    const { updateIsLoggedIn } = useContext(Context);

    useEffect(() => {
        async function getUserID() {
            // Will be re-written to real auth
            let perm = await `granted`;

            if (perm !== `granted`) {
                return;
            }
            // Temp User ID
            updateIsLoggedIn(true);
            setUserID(28517391)
        }

        getUserID()
    }, [reload])

    return userID;
}
