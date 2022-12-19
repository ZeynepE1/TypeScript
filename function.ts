function getAverage(a: number, b: number, c?: number): string {
  let total = a + b;
  let count = 2;

  if (typeof c !== "undefined") {
    total += c;
    count++;
  }

  const result = total / count;
  console.log(result);
  return "result:" + result;
}
getAverage(10, 20, 50);
getAverage(10, 30);
