import { useEffect, useState } from "react";

interface Props {
    reload?: boolean;
}

export default function useLoginID({ reload = false }: Props) {
    const [userID, setUserID] = useState<number>();

    useEffect(() => {
        async function getUserID() {
            // Will be re-written to real auth
            let perm = await `granted`;

            if (perm !== `granted`) {
                return;
            }
            // Temp User ID
            setUserID(28517391)
        }

        getUserID()
    }, [reload])

    return userID;
}
