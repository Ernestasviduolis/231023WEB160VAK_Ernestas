let skaicius = 0;
let herbas = 0;

for (let x = 0; x < 10; x++) {

    let random = Math.random();

    console.log(random);

    if (random < 0.5) {
        skaicius++;
    } else {
        herbas++;
    }
}

console.log(`Iskrito skaicius: ${skaicius}`);
console.log(`Iskrito herbas: ${herbas}`);

// console.log("Iskrito herbas: " + herbas);

let vienosEilesZvaigzdutes = "";
for (let a = 0; a < 5; a++) {
    vienosEilesZvaigzdutes += "*";
    console.log(vienosEilesZvaigzdutes);
}



for (let a = 4; a >= 0; a--) {
    vienosEilesZvaigzdutes = "";
    for (let b = 0; b <= a; b++) {
        vienosEilesZvaigzdutes += "*";
    }
    console.log(vienosEilesZvaigzdutes);
}

function duokManSavaitesDienaPagalSkaiciu(skaicius) {
    switch (skaicius) {
        case 1:
            return "Pirmadienis";
        case 2:
            return "Antradienis";
        case 3:
            return "Trečiadienis";
        case 4:
            return "Ketvirtadienis";
        case 5:
            return "Penktadienis";
        case 6:
            return "Šeštadienis";
        case 7:
            return "Sekmadienis";
        default:
            return "Netinkamas skaičius";
    }
}