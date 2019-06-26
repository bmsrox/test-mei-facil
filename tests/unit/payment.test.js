const repository = require('../../src/repository/payment')
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

describe('Repository Payment', () => {
    it('should validate an account debit', async () => {
        const account = repository.getAccount(accounts,1);
        const response = await repository
            .debit(account, 300)
        
        expect(response[0].balance).toBe(1700)
    })

    it('should validate an account credit', async () => {
        const account = repository.getAccount(accounts,2);
        const response = await repository
            .credit(account, 500)
        
        expect(response[0].balance).toBe(500)
    })

    it('should validate payment in up to 1 installment', async () => {
        const response = await repository
            .netValue(1, 500)
        
        expect(response).toBe(481.05)
        expect(response).not.toBeNull();
    })

    it('should validate payment in up to 2 installment', async () => {
        const response = await repository
            .netValue(2, 500)
            
        expect(response).toBe(471.1)
        expect(response).not.toBeNull();
    })

    it('should validate payment in up to 3 installment', async () => {
        const response = await repository
            .netValue(3, 500)
        
        expect(response).toBe(461.15)
        expect(response).not.toBeNull();
    })

    it('should validate payment in up to invalid installment', async () => {
        const response = await repository
            .netValue(4, 500)

        expect(response).toBe(0)
    })
})