function minimumAbsDifference(arr: number[]): number[][] {
    let minAbs: number = Number.MAX_VALUE;
    let minAbses: number[][] = [];
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length-1; i++) {
        const abs = Math.abs(arr[i+1] - arr[i]);
        if (minAbs > abs) {
            minAbs = abs;
            minAbses = [[arr[i], arr[i+1]]];
        } else if (minAbs === abs) {
            minAbses.push([arr[i], arr[i+1]]);
        }
    }
    return minAbses;
};