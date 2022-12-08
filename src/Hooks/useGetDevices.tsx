export default function useGetDevices() {

    async function sendData(url = '/getDevices') {
        await fetch(`${process.env.REACT_APP_API}${url}`, {
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
}
