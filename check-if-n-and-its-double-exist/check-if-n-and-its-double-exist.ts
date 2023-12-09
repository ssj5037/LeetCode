function checkIfExist(arr: number[]): boolean {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === 2 * arr[j]) {
                if (i === j) continue;
                return true;
            }
        }
    }
    return false;
};