function minOperations(s: string): number {
//     let sList_zero = s.split('');
//     let sList_one = s.split('');
    
//     let count_zero = s[0] === '0' ? 0 : 1;
//     let count_one = s[0] === '0' ? 1 : 0;
    
//     sList_zero[0] = '0';
//     sList_one[0] = '1';
    
//     for(let i = 0; i < sList_zero.length - 1; i++) {
//         if (sList_zero[i] === sList_zero[i+1]) {
//             sList_zero[i+1] === '1' ? sList_zero[i+1] = '0' : sList_zero[i+1] = '1';
//             count_zero++;
//         }
//     }
//     for(let i = 0; i < sList_one.length - 1; i++) {
//         if (sList_one[i] === sList_one[i+1]) {
//             sList_one[i+1] === '1' ? sList_one[i+1] = '0' : sList_one[i+1] = '1';
//             count_one++;
//         }
//     }
//     return count_zero > count_one ? count_one : count_zero;
    
    let count0 = 0;
    let count1 = 0;
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            if (s[i] === '1') count0++;
            else count1++;
        } else {
            if (s[i] === '1') count1++;
            else count0++;
        }
    }
    return count0 > count1 ? count1 : count0;
};