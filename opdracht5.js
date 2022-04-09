const checkbox = document.querySelector(".checkbox");

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
    sortAZ.sort((b, a) => (a.brand < b.brand) ? 1 : ((a.brand > b.brand) ? -1 : 0))
    return sortAZ
}

function sortZA(array) {
    const sortZA = [...array]
    sortZA.sort((a, b) => (a.brand < b.brand) ? 1 : ((a.brand > b.brand) ? -1 : 0))
    return sortZA
}

function ambiLight(checkbox) {
    if (checkbox.checked === true) {
        const inventory3 = inventory.filter((tv) => {
            if (tv.options.ambiLight === true) {
                return true;
            }
        })
        console.log(inventory3)
        empty()
        allTVS(inventory3)
    } else {
        empty()
        const inventory2 = [...inventory]
        allTVS(inventory2)
    }
}

function smartTv(checkbox) {
    if (checkbox.checked === true) {
        const inventory3 = inventory.filter((tv) => {
            if (tv.smartTv === true) {
                return true;
            }
        })
        console.log(inventory3)
        empty()
        allTVS(inventory3)
    } else {
        empty()
        const inventory2 = [...inventory]
        allTVS(inventory2)
    }
}

function empty() {
    document.getElementById("model-info").innerHTML = "";
}