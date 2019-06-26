const accounts = [
    {
        id: 1,
        balance: 2000
    },
    {
        id: 2,
        balance: 0
    }
];

module.exports = (app, repository) => {
    app.get('/', (req, res) => {
        res.send("TEST DEV MEI FÁCIL")
    })

    app.post('/', async (req, res) => {

        const { 
            account_origin,
            account_destiny,
            number_of_installment,
            value 
        } = req.body;

        let origin_acc = repository.getAccount(accounts, account_origin);
        let destiny_acc = repository.getAccount(accounts, account_destiny);

        try {

            const account_debit = await repository
                .debit(origin_acc, parseFloat(value));

            const netValue = repository
                .netValue(parseInt(number_of_installment), parseFloat(value));
            
            const account_credit = await repository
                .credit(destiny_acc, netValue);

            const response = {
                "status": 200,
                "net_value": netValue,
                "origin_balance": account_debit[0].balance,
                "destiny_balance": account_credit[0].balance
            }

            res.json(response);
        } catch (error) {
            return res.status(error.status).json({error});
        }
    })
}