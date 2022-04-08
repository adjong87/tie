//Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent.
// Log de uitkomst in de console.

let totalSold = 0;
for (let i = 0; i < inventory.length; i++) {
    totalSold += inventory[i].sold
}

const tvSold = document.getElementById("tv-sold")
tvSold.innerHTML =
    `<h3>Totaal aantal verkochte televisies:</h3> 
    <p>${totalSold} </p>`

// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
//
// DONE!!!!
//



// Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent.
// Log de uitkomst in de console.

let boughtIn = 0;
for (let i = 0; i < inventory.length; i++) {
    boughtIn += inventory[i].originalStock
}

const tvBoughtIn = document.getElementById("tv-ingekocht")
tvBoughtIn.innerHTML =
    `<h3>Totaal aantal ingekochte televisies:</h3> 
    <p>${boughtIn} </p>`

//Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
//
// DONE!!!!
//


//Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
let toSell = 0;
for (let i = 0; i < inventory.length; i++) {
    toSell += (inventory[i].originalStock-inventory[i].sold)
}

const tvToSell = document.getElementById("nog-te-verkopen")
tvToSell.innerHTML =
    `<h3>Totaal aantal nog te verkopen televisies:</h3> 
    <p>${toSell} </p>`
