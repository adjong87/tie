function priceAZ(array) {
    const priceAZ = [...array]
    priceAZ.sort((a, b) => a.price - b.price)
    return priceAZ
}

function priceZA(array) {
    const priceZA = [...array]
    priceZA.sort((b, a) => a.price - b.price)
    return priceZA
}

function sortAZ(array) {
    const sortAZ = [...array]
    sortAZ.sort((a, b) => a.brand - b.brand)
    return sortAZ
}

function sortZA(array) {
    const sortZA = [...array]
    sortZA.sort((b, a) => a.brand - b.brand)
    return sortZA
}

function empty(){
    document.getElementById("model-info").innerHTML = "";
}