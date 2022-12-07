import React from 'react'

interface LoanData {
    User: string,
    devices?: number[],
    packages?: number[]
}

export default function useCreateLoan() {

    async function sendData(data = {}, url = '/create') {

        const response = await fetch(`${process.env.REACT_APP_API}${url}`, {
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
    sendData()
}
