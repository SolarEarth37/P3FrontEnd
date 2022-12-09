export default function useGetOverdueLoans() {

    async function sendData(url = '/overdue') {
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
}
