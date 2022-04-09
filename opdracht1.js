// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen.
// Log de uitkomst in de console.

const tvTypes = inventory.map((tv) => {
    return tv.type;
})
console.log("uitkomst opdracht 1a :")
console.log(tvTypes);
console.log("");

//Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. ' +
//Log de uitkomst in de console.

const availableTV = inventory.filter((available) => {
    if (available.originalStock === available.sold) {
        return available;
    }
})
console.log("Uitkomst opdracht 1b: ");
console.log(availableTV)
console.log("");

// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.
// Log de uitkomst in de console.

const ambiLightTv = inventory.filter((ambilight) => {
    if (ambilight.options.ambiLight === true) {
        return true;
    }
})
console.log("Uitkomst opdracht 1c: ");
console.log(ambiLightTv)
console.log("");

// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.
// Log de uitkomst in de console.
const laagHoog = [...inventory]

laagHoog.sort((a, b) => a.price - b.price)
console.log("Uitkomst opdracht 1d: ");
console.log(laagHoog)
console.log("");
console.log(inventory)

