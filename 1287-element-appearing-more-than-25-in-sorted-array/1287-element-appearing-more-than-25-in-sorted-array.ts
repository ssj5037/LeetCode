function findSpecialInteger(arr: number[]): number {
    const point = Math.floor(arr.length / 4);
    if (point === 0) return arr.length > 0 ? arr[0] : null;
    for (let i = 0; i < arr.length - point; i++) {
        console.log(arr[i], arr[i+point])
        if (arr[i] === arr[i+point]) {
            return arr[i];
        }
    }
};