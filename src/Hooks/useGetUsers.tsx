interface UserData {
    name?: string,
    phone?: number,
    email?: string

}

export default function useGetUsers(): UserData[] {

    async function sendData(url = '/slik') {
        await fetch(`${url}`, {
            method: 'POST'
        }).then(async (result) => {
            if (!result.ok) {
                throw new Error('Could not connect to server')
            }

            let res = await result.json()

            return res
        })
    }
    sendData()
    return [{name: "No users found"}]
}