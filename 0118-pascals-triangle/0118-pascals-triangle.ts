function generate(numRows: number): number[][] {
    let result: number[][] = [[1]];
    for (let n = 1; n < numRows; n++) {
        let subList: number[] = [1];
        for (let m = 1; m < n; m++) {
            subList.push(result[n-1][m-1] + result[n-1][m]);
        }
        subList.push(1);
        result.push(subList);
    }
    return result;
};