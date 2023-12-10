function heightChecker(heights: number[]): number {
    let orders: number[] = [];
    for (let i = 0; i < heights.length; i++) {
        let largerIndex = -1;
        for (let j = 0; j < orders.length; j++) {
            if (heights[i] < orders[j]) {
                largerIndex = j;
                break;
            }
        }
        if (largerIndex === -1) orders.push(heights[i]);
        else orders.splice(largerIndex, 0, heights[i]);
    }
    
    let count = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== orders[i]) count++;
    }
    return count;
};