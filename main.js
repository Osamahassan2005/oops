//........QNO 47
let laptops = [
    { make: "lenovo", model: "e545", year: 2022 },
    { make: "Apple", model: "MacBook Pro", year: 2020 },
    { make: "HP", model: "core i7", year: 2024 },
];
let [laptop1, laptop2] = laptops;
console.log(laptop1);
console.log(laptop2);
//.....QNO 46
let laptop = {
    make: "Dell",
    model: "New Elite Series",
    year: 2024,
    describe: function () {
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    },
};
laptop.describe();
//.....QNO 48
let pricesSet1 = [1200, 1500, 1100];
let pricesSet2 = [1000, 1300, 1600];
let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);
console.log(combinedPrices);
export {};
