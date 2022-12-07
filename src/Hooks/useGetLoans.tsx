import React from 'react'

export default function useGetLoans() {

    async function sendData(url = '/getLoan') {
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
