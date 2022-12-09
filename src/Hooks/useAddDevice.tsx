interface DeviceData {
    name: string,
    id: number,
    Serienumber?: number
}

export default function useAddDevice(data: DeviceData) {

    async function sendData(data = {}, url = '/create') {

        const response = await fetch(`${url}`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',

            body: JSON.stringify(data)
        })
        if (response.status === 200) {
            return await response.json()
        }
    }
    sendData(data)
}
