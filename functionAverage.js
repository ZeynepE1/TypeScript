//parametre bilgisi belli değilse
function getAverage() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var total = 0;
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        total += a[i];
        count++;
    }
    var result = total / count;
    console.log(result);
    return "result:" + result;
}
getAverage(10, 20, 50);
getAverage(10, 30);
getAverage(10, 20, 50, 60, 80, 70);
getAverage(10, 30, 46, 89, 98);
