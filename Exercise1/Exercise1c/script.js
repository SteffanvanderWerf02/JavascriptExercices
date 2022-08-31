const speed = 300000000

function calcJoule(weight) {
    //  E = m * c2
    document.getElementById("calc2").innerText = weight * Math.pow(speed,2)
}