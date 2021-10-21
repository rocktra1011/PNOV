var defects = prompt('How many defects? :')
var totalUnits = prompt('How many units total? :')

document.getElementById("someText").innerHTML = "PNOV DPMO = " + Math.round((1000000 * defects) / totalUnits);