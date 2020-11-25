// function fib(n, memo = []) {
//   if (memo[n] !== undefined) return memo[n];
//   if (n <= 2) return 1;
//   let res = fib(n - 1, memo) + fib(n - 2, memo);
//   memo[n] = res;
//   return res;
// }
// top down approach using memoization
function fib_memo(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n];
  let res = fib_memo(n - 1, memo) + fib_memo(n - 2, memo);
  memo[n] = res;
  return res;
}

console.log(fib_memo(100));

// bottom up approach -- tabulated fib
function fib_table(n) {
  if (n <= 2) return 1;

  const fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}

console.log(fib_table(100));
