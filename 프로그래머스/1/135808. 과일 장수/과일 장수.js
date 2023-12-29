function solution(k, m, score) {
    var answer = 0;
    score.sort((a, b) => b - a);
    let index = m-1;
    while (true) {
        if (index > score.length-1) break;
        answer += score[index] * m;
        index += m;
    }
    return answer;
}