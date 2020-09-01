/*

Think of 5 different real world "things" that you 
can describe with a JavaScript object

Assign each of them to a separate variable


For example:
var car = {
    brand: "Seat",
    model: "Arona",
    color: "white",
    horsepower: 115,
    doors: 5
};

*/
let camara1 = {
    megapixeles: '16MP',
    apertura: 1.8
}

let camara2 = {
    megapixeles: '8MP',
    apertura: 1.9
}

let camara3 = {
    megapixeles: '32MP',
    apertura: 10.8
}

var telefonoMobil = {
    marca: 'iPhone', 
    modelo: '10x',
    year: 2020, 
    camaras: [ 
        camara1,
        camara2,
        camara3
    ]
}

console.log(telefonoMobil.camaras);
