interface Loan {
    name?: string,
    dueDate?: Date,
}

interface LoansData {
    loans: [Loan]
}

export default function getLoans(): LoansData {

    async function sendData(url = '/getLoan') {
        await fetch(`${url}`, {
            method: 'POST'
        }).then(async (result) => {
            if (!result.ok) {
                return { loans: [] }
            }

            let res: LoansData = await result.json()

            return res
        })
    }
    sendData()
    return { loans: [{ name: "No loans found!", dueDate: new Date(0, 0, 1) }] }

}
