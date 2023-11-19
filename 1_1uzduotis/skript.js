
function tikrinti() {
    
    let svoris = document.getElementById("svoris");
    let ivestis = svoris.value;

    if (ivestis < 100) {
        console.log("svoris yra mažesnis nei šimtas.");
    } else {
        console.log("daugiau nei šimtas. svoris yra " + ivestis + " kg.");
    }
    
}



