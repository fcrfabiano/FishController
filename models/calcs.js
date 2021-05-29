function amount(transactions) {
    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.operation === "COMPRAR") {
            acc.compraskg += transaction.amount;
            acc.comprasreais += (transaction.price * transaction.amount);
            acc.total += transaction.amount;
        } else {
            acc.vendaskg += transaction.amount;
            acc.vendasreais += (transaction.price * transaction.amount);
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        compraskg: 0,
        comprasreais: 0,
        vendaskg: 0,
        vendasreais: 0,
        total: 0
    });

    console.log(summary);

    return summary;
}

module.exports = { amount }