function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    let sList = [...s];
    sList.sort();
    let tList = [...t];
    tList.sort();
    for(let i = 0; i < sList.length; i++) {
        if (sList[i] !== tList[i]) return false;
    }
    return true;
};