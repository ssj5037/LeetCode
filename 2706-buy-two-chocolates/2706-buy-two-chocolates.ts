function buyChoco(prices: number[], money: number): number {
    let [min, secondMin] = [Number.MAX_VALUE, Number.MAX_VALUE];
    for (let price of prices) {
        if (price < min) {
            [min, secondMin] = [price, min];
        } else if (price < secondMin) {
            secondMin = price;
        }
    }
    const buy = min + secondMin;
    return buy > money ? money : money - buy;
};