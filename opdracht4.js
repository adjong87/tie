const teller = 0;
function checkTV(array, index) {
    const array2 = [...array]
    const tvInfo = document.getElementById("model-info")
    let x = document.createElement("div")
    tvInfo.appendChild(x)
    x.innerHTML =
    `
    <h3>${array2[index].brand} ${array2[index].type}  ${array2[index].name}</h3> 
    <h4>${pricer(array2[index].price)}</h4>
    <h5>${sizer(array2[index].availableSizes)}</>
    `
}

//Opdracht 4/d
// function checkTV(array, index) {
//     let tvInfo = document.getElementById("model-info")
//     let li = document.createElement("p")
//     li.innerText = array[index].brand + " " + array[index].type + " " + array[index].name + "\n" + pricer(array[index].price) + "\n" + sizer2(array[index].availableSizes) + "\n\r"
//     tvInfo.appendChild(li);
// }

//Opdracht 4b: Zorg ervoor dat de prijs van een tv netjes geformat wordt. Maak een functie die één tv-prijs als parameter verwacht (zoals 379) en daar de volgende string van maakt: €379,-.
//Test of jouw functie ook werkt wanneer er een andere tv-prijs wordt meegegeven.

function pricer(price) {
    return "€" + price + ",-"
}

//Opdracht 4C
function sizer(arraySizes) {
    const grotes = [...arraySizes]
    for (let i = 0; i < grotes.length; i++) {
        grotes[i] = grotes[i] + "inch (" + (grotes[i] * 2.54) + " cm)"
    }
    return grotes.join(" | ")
}

//Opdrach 4c (alternatieve versie)
function sizer2(arraySizes) {
    for (let i = 0; i < arraySizes.length; i++) {
        arraySizes[i] = arraySizes[i] + "inch (" + (arraySizes[i] * 2.25) + " cm)"
    }
    return arraySizes.join(" | ")
}

//Opdracht 4e
function allTVS(array) {
    for (let i = 0; i < array.length; i++) {
        checkTV(array, [i])
    }
}

allTVS(inventory)
