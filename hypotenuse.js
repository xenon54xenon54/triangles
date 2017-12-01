function hypotenuse(a,b) {
    return Math.sqrt(a**2 + b**2)
    }
    function run() {
    var leg1 = document.getElementById("leg1").value;
    var leg2 = document.getElementById("leg2").value;
document.getElementById("output").innerHTML = hypotenuse(leg1,leg2);
    }