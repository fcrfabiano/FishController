function amount(transactions) {
    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.operation === "COMPRAR") {
            acc.compraskg += transaction.amount;
            acc.comprasreais += (transaction.price * transaction.amount);
            acc.totalkg += transaction.amount;
            acc.totalreais += (transaction.price * transaction.amount);
        } else {
            acc.vendaskg += transaction.amount;
            acc.vendasreais += (transaction.price * transaction.amount);
            acc.totalkg -= transaction.amount;
            acc.totalreais -= (transaction.price * transaction.amount);
        }

        return acc;
    }, {
        compraskg: 0,
        comprasreais: 0,
        vendaskg: 0,
        vendasreais: 0,
        totalkg: 0,
        totalreais: 0
    });

    console.log(summary);

    return summary;
}

module.exports = { amount }