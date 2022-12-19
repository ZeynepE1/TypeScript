function getAverage(a, b, c) {
    var total = a + b;
    var count = 2;
    if (typeof c !== "undefined") {
        total += c;
        count++;
    }
    var result = total / count;
    console.log(result);
    return "result:" + result;

}
getAverage(10, 20, 50);
getAverage(10, 30);
