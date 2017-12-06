function hypotenuse(a, b) {
    return Math.sqrt(a ** 2 + b ** 2)
}
function run() {
    var leg1 = document.getElementById("leg1").value;
    var leg2 = document.getElementById("leg2").value;
    document.getElementById("output").innerHTML = hypotenuse(leg1, leg2);
}
function classifyTri(a, b, c) {
    hypoLength = hypotenuse(a, b);
    if (c > hypoLength) {
        return ("Obtuse");
    }
    if (c == hypoLength) {
        return ("Right");
    }
    if (c < hypoLength) {
        return ("Acute");
    }
}
function run2() {
    var leg1 = document.getElementById("classleg1").value;
    var leg2 = document.getElementById("classleg2").value;
    var hypotenuse = document.getElementById("classhypotenuse").value;
    document.getElementById("output2").innerHTML = classifyTri(leg1, leg2, hypotenuse);
}
function distBetween(a, b, x, y) {
    var leg1 = a - x;
    var leg2 = b - y;
    return (hypotenuse(leg1, leg2));
}
function run3() {
    var x1 = document.getElementById("x1").value;
    var y1 = document.getElementById("y1").value;
    var x2 = document.getElementById("x2").value;
    var y2 = document.getElementById("y2").value;
    document.getElementById("output3").innerHTML = distBetween(x1, y1, x2, y2);
}