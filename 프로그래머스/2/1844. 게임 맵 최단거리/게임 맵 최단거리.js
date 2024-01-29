function solution(maps) {
    const dx = [0,1,0,-1];
    const dy = [1,0,-1,0];
    const n = maps.length - 1;
    const m = maps[0].length - 1;
    
    // 시작 노드를 큐에 삽입하고 [x,y,이동거리]
    const queue = [];
    queue.push([0,0,1]);
    // 방문처리
    // maps[0][0] = 0; 
    
    while(queue.length) {
        // 큐를 꺼내고(맨 앞의 것) 
        const [x, y, count] = queue.shift();

        // 마지막 지점이라면 이동거리 반환
        if (x === n && y === m) { return count; }
        
        for (let j = 0; j < 4; j++) {
            // 인접노드를 모두 확인
            let nx = x + dx[j];
            let ny = y + dy[j];

            // 이동할 수 있는 지점만
            if (nx >= 0 && nx <= n && ny >= 0 && ny <= m && maps[nx][ny] === 1) {
                // 큐에 삽입하고
                queue.push([nx,ny, count+1]);
                // 방문처리
                maps[nx][ny] = 0;
            }
        }
    }
    return -1;
}
