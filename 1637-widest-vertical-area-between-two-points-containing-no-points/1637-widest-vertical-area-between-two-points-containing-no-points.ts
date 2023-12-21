function maxWidthOfVerticalArea(points: number[][]): number {
    let maxWidth: number = 0;
    // let xPoints: number[] = points.map(point => point[0]);
    points.sort((a, b) => a[0]-b[0]);
    for (let i = 0; i < points.length - 1; i++) {
        const calc = points[i+1][0] - points[i][0];
        if (calc > maxWidth) maxWidth = calc; 
    }
    return maxWidth;
};