function imageSmoother(img: number[][]): number[][] {
    const m = img.length;
    const n = img[0].length;
    let result: number[][] = new Array(m);
    
    for (let i = 0; i < m; i++) {
        result[i] = new Array(n);
        
        for (let j = 0; j < n; j++) {
            let sum = 0;
            let divide = 0;
            
            for (let k = Math.max(0, i-1); k < Math.min(m, i+2); k++) {
                for (let l = Math.max(0, j-1); l < Math.min(n, j+2); l++) {
                    sum += img[k][l];
                    divide++;
                }
            }
            
            result[i][j] = Math.floor(sum / divide);
            // subResult.push(Math.floor(sum / divide));
        }
        // result.push(subResult);
    }
    return result;
};