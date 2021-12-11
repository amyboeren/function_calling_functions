//VAT exercise 1
const totalPrice = function (basePrice, vatPercentage) {
    const vatPrice = basePrice * vatPercentage;
    return vatPrice
}
console.log(totalPrice(12, 1.21)); //antwoord: 14,52

//VAT exercise 2
const totalPrice2 = function (priceInclvat, vatPercentage) {
    const basePrice2 = priceInclvat / vatPercentage;
    return basePrice2
}

const vatAmount = function () {
    const vatPrice2 = priceInclvat - basePrice2;
    return vatPrice2
}
console.log(vatAmount(12, 1.21)); //antwoord: ?? ik weet het niet, wat doe ik fout?