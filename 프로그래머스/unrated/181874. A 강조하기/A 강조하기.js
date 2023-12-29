function solution(myString) {
    var answer = '';
    myString = myString.toLowerCase();
    for (let s of myString) {
        answer += s === 'a' ? 'A' : s;
    }
    return answer;
}