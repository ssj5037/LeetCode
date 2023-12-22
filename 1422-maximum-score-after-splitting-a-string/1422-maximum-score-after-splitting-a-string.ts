function maxScore(s: string): number {
    let maxScore = 0;
    for (let i = 1; i <= s.length - 1; i++) {
        const left = (s.substring(0, i)).split("");
        const right = (s.substring(i)).split("");
        
        const leftCount: number = i - left.reduce((a, b) => Number(a) + Number(b), 0);
        const rightCount: number = right.reduce((a, b) => Number(a) + Number(b), 0);
        
        const score = leftCount + rightCount;
        if (maxScore < score) maxScore = score;
    }
    return maxScore;
};