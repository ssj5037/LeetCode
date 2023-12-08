/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
    const size = arr.length;
    for (let i = 0; i < size - 1; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0);
            i++;
        }
    }
    arr.splice(size);
};