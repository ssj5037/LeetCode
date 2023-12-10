function transpose(matrix: number[][]): number[][] {
    let result: number[][] = [[]];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (!result[j]) result = [...result, []];
            result[j][i] = matrix[i][j];
        }
    }
    return result;
};