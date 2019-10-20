const invalidTransactions = function (rawTransactions) {
    const records = {};
    const invalidTransactions = [];

    for (let i = 0; i < rawTransactions.length; i++) {
        const transaction = rawTransactions[i];
        const transactionArr = transaction.split(',');
        const name = transactionArr[0];
        const time = transactionArr[1];
        const amount = transactionArr[2];
        const city = transactionArr[3];

        if (records[name]) {
            const prevTransactions = records[name];

            prevTransactions.forEach((prevTransaction) => {
                const prevTransactionArr = prevTransaction.split(',');
                const prevTime = prevTransactionArr[1];
                const prevCity = prevTransactionArr[3];

                if (Math.abs(time - prevTime) <= 60 && city !== prevCity) {
                    if (!invalidTransactions.includes(prevTransaction)) invalidTransactions.push(prevTransaction);
                    if (!invalidTransactions.includes(transaction)) invalidTransactions.push(transaction);
                }
            });

            records[name].push(transaction);
        } else {
            records[name] = [transaction];
        }

        if (amount > 1000 && !invalidTransactions.includes(transaction)) {
            invalidTransactions.push(transaction);
        }

    }

    return invalidTransactions;
};

const transaction = ["alice,20,800,mtv","alice,50,100,beijing"];
// const transaction = ["alice,20,800,mtv","alice,50,1200,mtv"];
// const transaction = ["alice,20,800,mtv","bob,50,1200,mtv"];
// const transaction = ["bob,689,1910,barcelona","alex,696,122,bangkok","bob,832,1726,barcelona","bob,820,596,bangkok","chalicefy,217,669,barcelona","bob,175,221,amsterdam"];
// const transaction = ["lee,886,1785,beijing","alex,763,1157,amsterdam","lee,277,129,amsterdam","bob,770,105,amsterdam","lee,603,926,amsterdam","chalicefy,476,50,budapest","lee,924,859,barcelona","alex,302,590,amsterdam","alex,397,1464,barcelona","bob,412,1404,amsterdam","lee,505,849,budapest"]

console.log(invalidTransactions(transaction));
