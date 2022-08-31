const speed = 300000000

function calcJoule(weight) {
    //  E = m * c2
    document.getElementById("jule").innerText = weight * Math.pow(speed,2)
}