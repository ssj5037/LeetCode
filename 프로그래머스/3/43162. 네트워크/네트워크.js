function solution(n, computers) {
    // union-find : 합집합. 두 노드의 공통 분모 노드를 찾는다. (가장 작은 정수 값을 부모 노드로 생각한다.)
    let parents = new Array(n).fill().map((_,i)=> i);
    
    // 대칭 행렬이므로, 1 <= i < n-1, i+1 <= j < n 범위에서만 순회 
    for (let i = 0; i < n-1; i++) {
        for (let j = i+1; j < n; j++) {
            // i, j가 연결상태면 
            if (computers[i][j] === 1) {
                // 두 노드 중 부모노드(parentNode)를 찾고, 부모노드가 아닌 노드를 변경할 노드(prevNode)로 저장.
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
                
                // 변경할 노드(prevNode)를 부모로 가진 것들을 찾아 최종 부모노드(parentNode)로 변경
                parents = parents.map(p => p === prevNode ? parentNode : p);
            }
        }
    }
    return new Set(parents).size;
}