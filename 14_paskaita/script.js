// Jeigu ikeliame si script.js faila HTML head elemente, tada reikia sito:
// document.addEventListener("DOMContentLoaded", function() {

// Čia rasom visa su DOM'u susijusi JS kodą.

// });


// sukuriam tuscia paragrafo elementą
let paragrafas = document.createElement("p");
        
// Įdedu į paragarfo elemento vidų tekstą
paragrafas.innerText = "Kažkoks paragrafo tekstas";

// Patalpinu paragrafo elementą į body elemento galą
document.body.append(paragrafas);

// Patalpinu paragrafo elementą į body elemento priekį
// document.body.prepend(paragrafas);

let antraste = document.createElement("div");
antraste.innerHTML = "<h2>JS antraštė</h2>";

document.body.prepend(antraste);

let body = document.body;
console.log(body);

let paveiksleliai = document.images;
console.log(paveiksleliai);

// getElementById grazina pati elementa
let paragrafasSuId = document.getElementById("paragrafo-id");
console.log(paragrafasSuId);

// getElementsBy... grazina HTMLCollection
let picsumPhotos = document.getElementsByTagName("img");
console.log(picsumPhotos);

let paveiksleliaiSuKlasemis = document.getElementsByClassName("pav");
console.log(paveiksleliaiSuKlasemis);

// randam pirma ir ji viena pasirenka
let paragrafasGalerijoje = document.querySelector("div.galerija p");
console.log(paragrafasGalerijoje);

// randam visus ir juos sudeda į NodeList
let paragrafaiGalerijoje = document.querySelectorAll("div.galerija p");
console.log(paragrafaiGalerijoje);

paragrafasSuId.style.color = "red";

paragrafasSuId.style.backgroundColor = "black";

paveiksleliai[0].style.width = "300px"

document.querySelector("h1").innerText = "Naujas antrastes tekstas";

paragrafasGalerijoje.classList.add("acctive");

let mygtukas = document.getElementById("magic-button");

mygtukas.onclick = function() {
    console.log("MYGTUKAS BUVO PASPAUSTAS!");
};

let mygtukas2 = document.getElementById("magic-button-2");

// mygtukas2.addEventListener("click", function() {
//     if (document.body.style.backgroundColor === "orange") {
//         document.body.style.backgroundColor = "green";
//     } else {
//         document.body.style.backgroundColor = "orange";
//     }
// });

mygtukas2.addEventListener("click", function() {
    document.body.classList.toggle("change-bg");
});




