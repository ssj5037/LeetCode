function singleNumber(nums: number[]): number {
    // 예: [2, 2, 1]의 경우 2^2^1 이 되므로,
    // 2^2 = 0
    // 2^2^1 = 1
    // 결국 같은 수는 xor 연산자에 의해 0이 되고, 0과 남은 숫자끼리의 xor 연산은 남은 숫자가 나오게 된다.
    
    // 예2 : [4,1,2,1,2] => 4^1^2^1^2 = 4^0^0 = 4
    return nums.reduce((x, y) => x^y);
};