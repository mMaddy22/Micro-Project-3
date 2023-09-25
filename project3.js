const foodData = require("./food.json");

// 1 : list all the food items
let Allitems = foodData.map((items) => {
  return items;
});
console.log("ALL food item ",Allitems);

//Task2: list all the food items with category vegetables

let itemsVegetables = foodData.filter((items) => {
  if (items.category === "Vegetable") return items.foodname;
});
console.log("items with vegetable category",itemsVegetables);

//Task3:list all the food items with category fruit

let itemsFruits = foodData.filter((items) => {
  if (items.category === "Fruit") return items.foodname;
});
console.log("items with Fruits category",itemsFruits);

// Task4:list all the food items with category protien

let itemsProtien = foodData.filter((items) => {
  if (items.category === "Protein") return items;
});
console.log("items with  Protein category",itemsProtien);

// Task5:list all the food items with category nuts

let itemsNuts = foodData.filter((items) => {
  if (items.category === "Nuts") return items;
});
console.log("items with Nuts category",itemsNuts);

// Task6:list all the food items with category grains

let itemsGrains = foodData.filter((items) => {
  if (items.category === "Grain") return items;
});
console.log("items with Grain category",itemsGrains);

// Task7:list all the food items with category dairy

let itemsDairy = foodData.filter((items) => {
  if (items.category === "Dairy") return items;
});
console.log("items with Dairy category",itemsDairy);

// Task8:list all the food items with calorie above 100

let itemsCalorieAbove100 = foodData.filter((items) => {
  if (items.calorie > 100) return items;
});
console.log("items which contain calorieabove100",itemsCalorieAbove100);

// Task9:list all the food items with calorie below 100

let itemsCalorieBelow100 = foodData.filter((items) => {
  if (items.calorie < 100) return items;
});
console.log("items which contain caloriebelow100",itemsCalorieBelow100);

// Task10:list all the food items with highest protien content to lowest

let highestToLowest = foodData.sort((a, b) => {
  return b.protiens - a.protiens;
});
console.log("highest protien content to lowest",highestToLowest);

// Task11:list all the food items with lowest cab content to highest

let lowestToHighest = foodData.sort((a, b) => {
  return a.cab - b.cab;
});
console.log("lowest cab content to highest",lowestToHighest);