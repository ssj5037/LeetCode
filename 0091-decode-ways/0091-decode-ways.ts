function numDecodings(s: string): number {
  let dp = [1, 0];
  for (let i = s.length - 1; 0 <= i; i--) {
    const using_two = (s.substring(i, i + 2) < "27") ? dp[1] : 0;
    dp[1] = dp[0];
    dp[0] = ('0' != s[i]) ? (dp[0] + using_two) : 0;
    // console.log(i, dp, s.substring(i, i + 2), using_two)
  }
  return dp[0];
};