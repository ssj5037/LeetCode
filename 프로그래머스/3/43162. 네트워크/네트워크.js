function solution(n, computers) {
    // union-find
    let parents = new Array(n).fill().map((_,i)=> i);
    
    for (let i = 0; i < n-1; i++) {
        for (let j = i+1; j < n; j++) {
            if (computers[i][j] === 1) {
                let parentNode = -1;
                let prevNode = -1;
                
                if (parents[i] <= parents[j]) {
                    parentNode = parents[i];
                    prevNode = parents[j];
                } else {
                    parentNode = parents[j];
                    prevNode = parents[i];
                }

                parents[i] = parentNode;
                parents[j] = parentNode;
                
                parents = parents.map(p => p === prevNode ? parentNode : p);
            }
        }
    }
    return new Set(parents).size;
}