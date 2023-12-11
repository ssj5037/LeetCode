function thirdMax(nums: number[]): number {
    // ## My Solution
    // // 중복되지 않은 숫자들로 이루어진 역순 정렬을 위한 변수 
    // let orders: number[] = [];
    // for (let i = 0; i < nums.length; i++) {
    //     // 중복된 숫자인지 여부 확인
    //     if (!orders.includes(nums[i])) {
    //         // 중복된 숫자가 아니라면 해당 숫자가 들어갈 위치 확인
    //         let index = -1;
    //         for (let j = 0; j < orders.length; j++) {
    //             if (nums[i] < orders[j]) {
    //                 index = j;
    //             }
    //         }
    //         orders.splice(index + 1, 0, nums[i]);
    //     }
    // }
    // if (orders.length < 3) return orders[0];
    // else return orders[2];
    
    // ## Better Solution
    let [first, second, third] = Array(3).fill(-Infinity);
    for (let i = 0; i < nums.length; i++) {
        if (first === nums[i] || second === nums[i] || third === nums[i]) continue;
        if (nums[i] > first) {
            [first, second, third] = [nums[i], first, second];
        } else if (nums[i] > second) {
            [second, third] = [nums[i], second];
        } else if (nums[i] > third) {
            third = nums[i];
        }
    }
    return third === -Infinity ? first : third;
};