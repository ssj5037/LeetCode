function findKthLargest(nums: number[], k: number): number {
   // find the largest element
    let largest = -Infinity;
    
    for(let i=0;i<nums.length;i++){
        if(nums[i] > largest) largest = nums[i];
    }
    
    // construct a hash map of difference between nums[i] and largest
    // 가장 큰 값과의 차이를 인덱스로 두고, 해당 차이만큼 나는 수가 몇 개가 있는지 체크
    const hash = {};
    
    for(let i=0;i<nums.length;i++){
        const diff = largest-nums[i];
        hash[diff] = (hash[diff] || 0) + 1;
    }
    
    // k번째 숫자가 무엇인지 확인하기 위해 hash에서 순서대로 count를 한다.
    // find kth largest number
    let count = 0;
    let diff = 0;
    while(count<k){
        count += (hash[diff] || 0);
        diff++;
    }
    
    return largest - diff + 1;
};