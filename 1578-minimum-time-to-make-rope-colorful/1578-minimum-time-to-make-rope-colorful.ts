function minCost(colors: string, neededTime: number[]): number {
    let result = 0;
    let max = 0;
    for (let i = 0; i < colors.length; i++) {
        result += neededTime[i];
        max = Math.max(max, neededTime[i]);
        if (colors[i+1] !== colors[i]) {
            result -= max;
            max = 0;
        }
    }
    return result;
};