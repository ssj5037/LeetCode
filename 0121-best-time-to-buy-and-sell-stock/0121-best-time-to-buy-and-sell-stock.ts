function maxProfit(prices: number[]): number {
    let maxProfit: number = 0;
    let min: number = prices[0];
    for (let i in prices) {
        if (prices[i] < min) min = prices[i];
        if (prices[i] - min > maxProfit) maxProfit = prices[i] - min;
    }
    return maxProfit;
};