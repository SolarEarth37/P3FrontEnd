export default async function useGetDevices() {
    const url = '/getDevices'
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
