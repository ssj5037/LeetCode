function destCity(paths: string[][]): string {
    for (let i = 0; i < paths.length; i++) {
        let isLast = true;
        for (let j = 0; j < paths.length; j++) {
            if (paths[i][1] === paths[j][0]) isLast = false;
        }
        if (isLast) return paths[i][1];
    }
};