function maxProfit(prices: number[]): number {
    let maxProfit: number = 0;
    let min: number = prices[0];
    for (let i in prices) {
        min = Math.min(min, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - min);
    }
    return maxProfit;
};