//parametre bilgisi belli değilse
function getAverage(...a: number[]): string {
  let total = 0;
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    total += a[i];
    count++;
  }

  const result = total / count;
  console.log(result);
  return "result:" + result;
}
getAverage(10, 20, 50);
getAverage(10, 30);
getAverage(10, 20, 50, 60, 80, 70);
getAverage(10, 30, 46, 89, 98);
