/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    // for (let i = nums.length - 1; i >= 0; i--) {
    //     for (let j = 0; j < i; j++) {
    //         if (nums[j] > nums[j+1]) {
    //             const temp = nums[j+1];
    //             nums[j+1] = nums[j];
    //             nums[j] = temp;
    //             console.log(nums)
    //         }
    //     }
    // }
    
    let n = 0;
    let m = 0;
    let l = nums.length - 1;
    
    while(m <= l) {
        if (nums[m] === 0) {
            [nums[m], nums[n]] = [nums[n], nums[m]];
            n++;
            m++;
        } else if (nums[m] === 2) {
            [nums[m], nums[l]] = [nums[l], nums[m]];
            l--;
        } else {
            m++;
        }
    }
};