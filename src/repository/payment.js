const TAX = [
    0.0379,
    0.0578,
    0.0777
]

const getAccount = (accounts, accountId) => {
    return accounts.filter(acc => acc.id === accountId);
} 

const debit = (account, value) => {
    return new Promise((resolve, reject) => {
        if (account.length) {
            return resolve(account.map(acc => {
                acc.balance -= value;
                return acc;
            }));
        }
        return reject({
            status: 404,
            message: "Account to debit does not exists"
        });
    })
}

const netValue = (numberOfInstallment, value) => {
    let tax = TAX[numberOfInstallment - 1] || 1
    return value - (value * tax);
}

const credit = (account, value) => {
    return new Promise((resolve, reject) => {
        if (account.length) {
            return resolve(account.map(acc => {
                acc.balance += value;
                return acc;
            }));
        }

        return reject({
            status: 404,
            message: "Account to credit does not exists"
        });
    })
}

module.exports = {
    debit,
    credit,
    netValue,
    getAccount
}