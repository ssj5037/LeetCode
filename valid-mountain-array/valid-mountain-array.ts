function validMountainArray(arr: number[]): boolean {
    let peak: number = 0;
    if (arr.length < 3) return false;
    for (let i = 0; i < arr.length - 1; i++) {
        if (peak === 0) {
            if (i !== 0 && arr[i] > arr[i+1]) {
                peak = i;
            } else if (arr[i] < arr[i+1]) {
                continue;
            } else {
                return false;
            }
        } else {
            if (arr[i] <= arr[i+1]) {
                return false;
            }
        }
    }
    if (peak === 0) return false;
    else return true;
};