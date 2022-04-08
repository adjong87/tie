function checkTV(arrayPlek) {
    const tvInfo = document.getElementById("model-info")
    return tvInfo.innerHTML =
            `<p>${arrayPlek.brand} ${arrayPlek.type} - ${arrayPlek.name}</br>
            ${pricer(arrayPlek.price)}</br>
            ${sizer(arrayPlek.availableSizes)}</br>
            </p>`
}
checkTV(inventory[7])

function pricer(price) {
    return "€" + price + ",-"
}



function sizer(arraySizes) {
    const grotes = [...arraySizes]
    for (let i = 0; i < grotes.length; i++) {
        grotes[i] = grotes[i] + "inch (" + (grotes[i] * 2.25) + " cm)"
    }
    return grotes.join(" | ")
}



function sizer2(arraySizes) {
    for (let i = 0; i < arraySizes.length; i++) {
        arraySizes[i] = arraySizes[i] + "inch (" + (arraySizes[i] * 2.25) + " cm)"
    }
    return arraySizes.join(" | ")
}


function allTVS(array){
    for(let i = 0; i<array.length;i++){
    checkTV(array[i])
    }
}
console.log(allTVS(inventory))