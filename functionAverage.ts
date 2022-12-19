//parametre bilgisi belli değilse ve arrow function kullanıyorsak
const getAverage2 = (...a: number[]): string => {
  let total = 0;
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    total += a[i];
    count++;
  }

  const result = total / count;
  console.log(result);
  return "result:" + result;
};
getAverage2(10, 20, 50);
getAverage2(10, 30);
getAverage2(10, 20, 50, 60, 80, 70);
getAverage2(10, 30, 46, 89, 98);
