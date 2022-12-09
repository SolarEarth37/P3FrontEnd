interface UserData {
    Name?: string,
    PhoneNumber?: number,
    Email?: string

}

export default async function useGetUsers(): Promise<UserData[]> {

    const url = '/slik'
    const res = await fetch(`${url}`, {
        method: 'POST'
    }).then(async (result) => {
        if (!result.ok) {
            throw new Error('Could not connect to server')
        }

        let res = await result.json()

        return res
    })

        
    return res
}