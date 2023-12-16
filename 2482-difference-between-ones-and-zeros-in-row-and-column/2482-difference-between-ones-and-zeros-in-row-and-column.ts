function onesMinusZeros(grid: number[][]): number[][] {
    const row = grid.length;
    const col = grid[0].length;
    
    let result: number[][] = [];
    
    let oneRowList: number[] = [];
    let oneColList: number[] = [];
    
    for (let i = 0; i < row; i++) {
        oneRowList.push(oneRowCount(grid, i));
    }
    for (let i = 0; i < col; i++) {
        oneColList.push(oneColCount(grid, i));
    }
    
    for (let i = 0; i < row; i++) {
        let subResult: number[] = [];
        for(let j = 0; j < col; j++) {
            subResult.push(2*(oneRowList[i]+oneColList[j])-(row+col));
        }
        result.push(subResult);
    }
    
    return result;
};

function oneRowCount(grid: number[][], index: number): number {
    let sum = 0;
    for (let i = 0; i < grid[0].length; i++) {
        sum += grid[index][i];
    }
    return sum;
};

function oneColCount(grid: number[][], index: number): number {
    let sum = 0;
    for (let i = 0; i < grid.length; i++) {
        sum += grid[i][index];
    }
    return sum;
};