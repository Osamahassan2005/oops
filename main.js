// Importing the functions from the biryani module
import { prepareRice, prepareChicken, mixRiceAndChicken, serveBiryani } from './module.js';
let biryaniRecipe = {
    prepareRice,
    prepareChicken,
    mixRiceAndChicken,
    serveBiryani
};
// Alternatively, using the recipe object
console.log("\nUsing the recipe object:");
biryaniRecipe.prepareRice();
biryaniRecipe.prepareChicken();
biryaniRecipe.mixRiceAndChicken();
biryaniRecipe.serveBiryani();
