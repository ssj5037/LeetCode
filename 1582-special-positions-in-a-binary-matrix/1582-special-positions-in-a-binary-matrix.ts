function numSpecial(mat: number[][]): number {
    
    let result: number = 0;
    
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 0) continue;
            if (rowSpecial(mat, i) && colSpecial(mat, j)) result++;
        }
    }

    return result;
};

function rowSpecial(mat: number[][], index: number): boolean {
    let sum: number = 0;
    for (let i = 0; i < mat[0].length; i++) {
        sum += mat[index][i];
    }
    return sum === 1 ? true : false;
}

function colSpecial(mat: number[][], index: number): boolean {
    let sum: number = 0;
    for (let i = 0; i < mat.length; i++) {
        sum += mat[i][index];
    }
    return sum === 1 ? true : false;
}
