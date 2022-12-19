//parametre bilgisi belli değilse ve arrow function kullanıyorsak
var getAverage2 = function () {
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
};
getAverage2(10, 20, 50);
getAverage2(10, 30);
getAverage2(10, 20, 50, 60, 80, 70);
getAverage2(10, 30, 46, 89, 98);
