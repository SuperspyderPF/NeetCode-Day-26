const mod = 1e9 + 7;
const sumSubarrayMins = (A) => {
    let n = A.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        let min = A[i];  // each subarray min, begin with [A[i]], then [A[i], A[i + 1]], then [A[i], A[i + 1], A[i + 2]]......
        for (let j = i; j < n; j++) { // for each subarray [i, j], the if the next element A[j] < min, so this subarray min is A[j] otherwise min
            if (A[j] < min) {
                min = A[j];
                res += min;
            } else {
                res += min;
            }
        }
    }
    return res % mod;
};