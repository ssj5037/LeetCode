/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    nums1.splice(m);
    nums2.splice(n);
    // nums1 = nums1.concat(nums2);
    nums2.forEach(item => nums1.push(item));
    for (let i = nums1.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (nums1[j] > nums1[j+1]) {
                const temp = nums1[j];
                nums1[j] = nums1[j+1];
                nums1[j+1] = temp;
            }
        }
    }
};