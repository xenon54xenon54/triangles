function hypotenuse(a, b) {
    return Math.sqrt(a ** 2 + b ** 2)
}
function run() {
    var leg1 = document.getElementById("leg1").value;
    var leg2 = document.getElementById("leg2").value;
    document.getElementById("output").innerHTML = hypotenuse(leg1, leg2);
}
function classifyTri(a, b, c) {
    //if ((a + b > c) && (a + c > b) && (b + c > a)) {
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
    //else {
    //   return ("Not a triangle");
    //}
//}
function run2() {
    var leg1 = document.getElementById("classleg1").value;
    var leg2 = document.getElementById("classleg2").value;
    var hypotenuse = document.getElementById("classhypotenuse").value;
    document.getElementById("output2").innerHTML = classifyTri(leg1, leg2, hypotenuse);
}