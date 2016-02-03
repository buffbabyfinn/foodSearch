//this file contains all menu item objects for all restaurant objects


//Natural Selection
var R1M1 = {
reference: "R1M1",
name: "coconut curry soup",
description: "lemongrass, lime, brussels sprouts, carrot, herb oil",
ingredients: "lemongrass, lime, brussels sprouts, carrot, herb oil",
restrictions: ["glutenFree", "vegetarian", "pescatarian", "vegan", "dairyFree", "nutAllergy", "kosher", "halal"],
price: 11.25
}

var R1M2 = {
reference: "R1M2",
name: "belgian endive & treviso salad",
description: "asian pear, radish, peppers, dried cherries, dijon",
ingredients: "asian pear, radish, peppers, dried cherries, dijon",
restrictions: ["glutenFree", "vegetarian", "pescatarian", "vegan", "dairyFree", "nutAllergy", "kosher", "halal"],
price: 11.25
}

var R1M3 = {
reference: "R1M3",
name: "crispy polenta with trumpet royale",
description: "leek, parsnip, carrot, breakfast radish",
ingredients: "leek, parsnip, carrot, breakfast radish",
restrictions: ["glutenFree", "vegetarian", "pescatarian", "vegan", "dairyFree", "nutAllergy", "kosher", "halal"],
price: 11.25
}

var R1M4 = {
reference: "R1M4",
name: "squash cake with caramelized apples",
description: "apricot, pumpkin mousse, raspberry, almond",
ingredients: "apricot, pumpkin mousse, raspberry, almond",
restrictions: ["glutenFree", "vegetarian", "pescatarian", "vegan", "dairyFree", "kosher", "halal"],
price: 11.25
}

var R1M5 = {
reference: "R1M5",
name: "chestnut tagliatelle pasta",
description: "lemon, shallot, balsamic, creamed greens",
ingredients: "lemon, shallot, balsamic, creamed greens",
restrictions: ["vegetarian", "pescatarian", "kosher", "halal"],
price: 11.25
}

var R1M6 = {
reference: "R1M6",
name: "citrus & delicata squash salad",
description: "watercress, olives, dates, creamy sherry dressing",
ingredients: "watercress, olives, dates, creamy sherry dressing",
restrictions: ["glutenFree", "vegetarian", "pescatarian", "vegan", "dairyFree", "nutAllergy", "kosher", "halal"],
price: 11.25
}

var R1M7 = {
reference: "R1M7",
name: "creamy herbed risotto",
description: "braised red cabbage, salsify, sunchoke, cider",
ingredients: "braised red cabbage, salsify, sunchoke, cider",
restrictions: ["glutenFree", "vegetarian", "pescatarian", "dairyFree", "nutAllergy", "kosher", "halal"],
price: 11.25
}

var R1M8 = {
reference: "R1M8",
name: "lemon tapioca parfait",
description: "huckleberry, coconut, cinnamon cookie",
ingredients: "huckleberry, coconut, cinnamon cookie",
restrictions: ["glutenFree", "vegetarian", "pescatarian", "vegan", "dairyFree", "nutAllergy", "kosher", "halal"],
price: 11.25
}

//Bunk Sandwiches
var R2M1 = {
reference: "R2M1",
name: "Egg & Cheese",
description: "on a hard roll",
ingredients: "egg, cheese, bread roll",
restrictions: ['vegetarian','pescatarian','nutAllergy','kosher','halal'],
price: 5,
picture: true,
}

var R2M2 = {
reference: "R2M2",
name: "Peanut Butter & Jelly",
description: "or Peanut Butter & Nutella or Nutella & Jelly. Served with kettle chips.",
ingredients: "peanut butter, nutella, jelly, kettle chips, bread",
restrictions: ['vegetarian','pescatarian','hindu','kosher','halal','dairyFree'],
price: 5,
picture: true
}

var R2M3 = {
reference: "R2M3",
name: "Grilled Tillamook Cheddar",
description: "Served with kettle chips. Add tomato soup 2.00.",
ingredients: "cheese, tomato, bread",
restrictions: ['vegetarian','pescatarian','nutAllergy','hindu','kosher','halal'],
price: 6,
picture: true
}

//Ataula

var R3M1 = {
reference: "R3M1",
name: "Nuestra Cesar",
description: "romaine lettuce, free range chicken, croutons, parmesan",
ingredients: "romaine lettuce, free range chicken, croutons, parmesan",
restrictions: ['nutAllergy','kosher','halal'],
price: 12,
picture: false
}

var R3M2 = {
reference: "R3M2",
name: "Remolacha",
description: "pickled beets, organic greens, citrus, torpedo onions, walnuts",
ingredients: "pickled beets, organic greens, citrus, torpedo onions, walnuts",
restrictions: ['glutenFree','vegetarian','pescatarian','vegan','dairyFree','hindu','kosher','halal'],
price: 11,
picture: false
}

//the Original Dinerant
var R4M1 = {
reference: "R4M1",
name: "Elvis Sighting",
description: "",
ingredients: "brioche, bacon, bananas, caramel sauce, candied nuts",
restrictions: [false],
price: 10,
picture: true
}

var R4M2 = {
reference: "R4M2",
name: "Creme Brulee French Toast",
description: "",
ingredients: "brioche, eggs, milk",
restrictions: ['vegetarian','pescatarian','nutAllergy','kosher','halal'],
price: 9,
picture: true
}

var R4M3 = {
reference: "R4M3",
name: "Tofu Hash",
description: "",
ingredients: "eggs, tofu, potatoes, seasonal vegetables, toast",
restrictions: ['vegetarian','pescatarian','nutAllergy','kosher','halal'],
price: 11,
picture: true
}

var R4M4 = {
reference: "R4M4",
name: "Veggie Sausage Scramble",
description: "",
ingredients: "vegan sausage, eggs, cheddar, greens, tomato confit",
restrictions: ['vegetarian','pescatarian','nutAllergy','kosher','halal'],
price: 11,
picture: true
}

var R4M5 = {
reference: "R4M5",
name: "Oregon Salad",
description: "",
ingredients: "greens, beets, pear, hazelnut, chevre, sherry vinaigrette",
restrictions: ['glutenFree','vegetarian','pescatarian','kosher','halal'],
price: 13.00,
picture: true
}

//The Waffle Window
var R5M1 = {
reference: "R5M1",
name: "Tomato B's",
description: "",
ingredients: "waffle (eggs, milk), brie, basil, tomato, peach jam",
restrictions: ['vegetarian','pescatarian','nutAllergy','kosher','halal'],
price: "?",
picture: false
}

var R5M2 = {
reference: "R5M2",
name: "Farm Fusion",
description: "",
ingredients: "waffle, mushrooms, spinach, roasted pepper, tomato, chevre",
restrictions: ['vegetarian','pescatarian','nutAllergy','kosher','halal'],
price: "?",
picture: true
}

var R5M3 = {
reference: "R5M3",
name: "Nutella and Fresh Banana",
description: "",
ingredients: "waffle, nutella, whipped cream, cinnamon sugar, fudge",
restrictions: ['vegetarian','pescatarian','kosher','halal'],
price: "?",
picture: true
}


//Screen Door
var R6M1 = {
reference: "R6M1",
name: "Crispy Fried Oysters",
description: "Oysters that are crisped. And fried.",
ingredients: "oysters, batter",
restrictions: ['pescatarian','nutAllergy','halal'],
price: 9.75,
picture: true
}

var R6M2 = {
reference: "R6M2",
name: "Macroni and Cheese",
description: "",
ingredients: "macaroni, cheese",
restrictions: ['vegetarian','pescatarian','nutAllergy','kosher','halal'],
price: 4.75,
picture: true
}

var R6M3 = {
reference: "R6M3",
name: "Hushpuppies",
description: "",
ingredients: "cornmeal, eggs, buttermilk, scallions",
restrictions: ['vegetarian','pescatarian','nutAllergy','kosher','halal'],
price: 6.50,
picture: true
}
