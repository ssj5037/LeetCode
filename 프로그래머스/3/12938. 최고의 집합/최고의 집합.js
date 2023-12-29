function solution(n, s) {
    var answer = [];
    if (n > s) return [-1];
    
    for (let i = n; i > 0; i --) {
        const div = Math.floor(s/i);
        answer.push(div);
        s -= div;
    }
    return answer;
}