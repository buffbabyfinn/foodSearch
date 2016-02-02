//this file will be used to store all menu item objects for all restaurant objects

//Ataula
var T1 = {
name: "Nuestra Cesar",
description: "romaine lettuce, free range chicken, croutons, parmesan",
ingredients: "romaine lettuce, free range chicken, croutons, parmesan",
restrictions: 
{
glutenFree: false,
vegetarian: false,
pescetarian: false,
vegan: false,
dairyFree: false,
nutFree: true,
hindu: false,
jewish: true,
muslim: true,
},
price: 12.00,
picture: null  
}

var T2 = {
name: "Remolacha",
description: "pickled beets, organic greens, citrus, torpedo onions, walnuts",
ingredients: "pickled beets, organic greens, citrus, torpedo onions, walnuts",
restrictions: 
{
glutenFree: true,
vegetarian: true,
pescetarian: true,
vegan: true,
dairyFree: true,
nutFree: false,
hindu: true,
jewish: true,
muslim: true,
},
price: 11.00,
picture: null
}

//the Original Dinerant
menu-items:[originalItem1, originalItem2, originalItem3, originalItem4, originalItem5]

  var originalItem1 = {
    dish-name: "Elvis Sighting"
    description: "",
    ingredients: ["brioche",
    "bacon", "bananas", "caramel sauce", "candied nuts"],
    glutenfree: false,
    vegetarian: false,
    pescetarian: false,
    vegan: false,
    dairy-free: false,
    nut-allergy: false,
    hindu: false,
    jewish: false,
    muslim: false,
    price: "10.00",
    picture: true
  }

  var originalItem2 = {
    dish-name: "Creme Brulee French Toast",
    description: "",
    ingredients: ["brioche"],
    glutenfree: false,
    vegetarian: true,
    pescetarian: true,
    vegan: false,
    dairy-free: false,
    nut-allergy: true,
    hindu: false,
    jewish: true,
    muslim: true,
    price: "9.00",
    picture: true
  }

  var originalItem3 = {
    dish-name: "Tofu Hash",
    description: "",
    ingredients: ["eggs","tofu","potatoes","seasonal vegetables","toast"],
    glutenfree: false,
    vegetarian: true,
    pescetarian: true,
    vegan: false,
    dairy-free: false,
    nut-allergy: true,
    hindu: false,
    jewish: true,
    muslim: true,
    price: "11.00",
    picture: true
  }

  var originalItem4 = {
    dish-name: "Veggie Sausage Scramble",
    description: "",
    ingredients: ["vegan sausage","eggs","cheddar","greens","tomato confit"], glutenfree: false,
    vegetarian: true,
    pescetarian: true,
    vegan: false,
    dairy-free: false,
    nut-allergy: true,
    hindu: false,
    jewish: true,
    muslim: true,
    price: "11.00",
    picture: true
  }

  var originalItem5 = {
    dish-name: "Oregon Salad",
    description: "",
    ingredients: ["greens", "beets","pear","hazelnut","chevre","sherry vinaigrette"], glutenfree: true,
    vegetarian: true,
    pescetarian: true,
    vegan: false,
    dairy-free: false,
    nut-allergy: false,
    hindu: false,
    jewish: true,
    muslim: false,
    price: "13.00",
    picture: true
    }
}

//The Waffle Window
menu-items:[waffleItem1, waffleItem2, waffleItem3]

  var waffleItem1 = {
    dish-name: "Tomato B's",
    description: "",
    ingredients: ["waffle","brie","basil","tomato","peach jam"], glutenfree: false,
    vegetarian: true,
    pescetarian: true,
    vegan: false,
    dairy-free: false,
    nut-allergy: true,
    hindu: false,
    jewish: true,
    muslim: true,
    price: "",
    picture: false
  }

  var waffleItem2 = {
    dish-name: "Farm Fusion",
    description: "",
    ingredients: ["waffle","mushrooms","spinach","roasted pepper","tomato","chevre"],
    glutenfree: false,
    vegetarian: true,
    pescetarian: true,
    vegan: false,
    dairy-free: false,
    nut-allergy: true,
    hindu: false,
    jewish: true,
    muslim: true,
    price: "",
    picture: true
  }

  var waffleItem3 = {
    dish-name: "Nutella and Fresh Banana",
    description: "",
    ingredients: ["waffle","nutella","whipped cream","cinnamon sugar","fudge"],
    glutenfree: false,
    vegetarian: true,
    pescetarian: true,
    vegan: false,
    dairy-free: false,
    nut-allergy: false,
    hindu: false,
    jewish: true,
    muslim: true,
    price: "",
    picture: true
  }
}

//Screen Door

menu-items:[screenItem1, screenItem2, screenItem3]

  var screenItem1 = {
    dish-name: "Crispy Fried Oysters",
    description: "",
    ingredients: ["oysters"],
    glutenfree: false,
    vegetarian: false,
    pescetarian: true,
    vegan: false,
    dairy-free: false,
    nut-allergy: true,
    hindu: false,
    jewish: false,
    muslim: true,
    price: "9.75",
    picture: true
  }

  var screenItem2 = {
    dish-name: "Macroni and Cheese",
    description: "",
    ingredients: ["macaroni","cheese"],
    glutenfree: false,
    vegetarian: true,
    pescetarian: true,
    vegan: false,
    dairy-free: false,
    nut-allergy: true,
    hindu: false,
    jewish: true,
    muslim: true,
    price: "4.75",
    picture: true
  }

  var screenItem3 = {
    dish-name: "Hushpuppies",
    description: "",
    ingredients: ["cornmeal","eggs","buttermilk","scallions"],
    glutenfree: false,
    vegetarian: true,
    pescatarian: true,
    vegan: false,
    dairy-free: false,
    nut-allergy: true,
    hindu: false,
    jewish: true,
    muslim: true,
    price: "6.50",
    picture: true
  }
}

//Bunk Sandwiches

menu-items:[bunkItem1, bunkItem2, bunkItem3]

  var bunkItem1 = {
    name: "Egg & Cheese",
    description: "on a hard roll",
    ingredients: ["egg", "cheese", "bread roll"],
    glutenfree: false,
    vegan: false,
    vegetarian: true,
    pescatarian: true,
    nutallergy: true,
    hindu: false,
    jewish: true,
    muslim: true,
    dairyfree: false
    price: 5,
    picture: true,
  }

  var bunkItem2 = {
    name: "Peanut Butter & Jelly",
    description: "or Peanut Butter & Nutella or Nutella & Jelly. Served with kettle chips.",
    ingredients: ["peanut butter", "nutella", "jelly", "kettle chips," "bread"],
    glutenfree: false,
    vegan: false,
    vegetarian: true,
    pescatarian: true,
    nutallergy: false,
    hindu: true,
    jewish: true,
    muslim: true,
    dairyfree: true
    price: 5,
    picture: true,
  }

  var bunkItem3 = {
    name: "Grilled Tillamook Cheddar",
    description: "Served with kettle chips. Add tomato soup 2.00.",
    ingredients: ["cheese", "tomato", "bread"],
    glutenfree: false,
    vegan: false,
    vegetarian: true,
    pescatarian: true,
    nutallergy: true,
    hindu: true,
    jewish: true,
    muslim: true,
    dairyfree: false,
    price: 6,
    picture: true,
  }
}

//Natural Selection]


var A1 = {
name: "coconut curry soup"
description: "lemongrass, lime, brussels sprouts, carrot, herb oil"
ingredients: "lemongrass, lime, brussels sprouts, carrot, herb oil"
restrictions: 
{
glutenFree: true,
vegetarian: true,
pescetarian: true,
vegan: true,
dairyFree: true,
nutFree: true,
hindu: true,
jewish: true,
muslim: true, 
}
price: 11.25
picture:
}

var A2 = {
name: "belgian endive & treviso salad"
description: "asian pear, radish, peppers, dried cherries, dijon"
ingredients: "asian pear, radish, peppers, dried cherries, dijon"
restrictions: 
{
glutenFree: true,
vegetarian: true,
pescetarian: true,
vegan: true,
dairyFree: true,
nutFree: true,
hindu: true,
jewish: true,
muslim: true,
}
price: 11.25
picture:   
}

var A3 = {
name: "crispy polenta with trumpet royale"
description: "leek, parsnip, carrot, breakfast radish"
ingredients: "leek, parsnip, carrot, breakfast radish"
restrictions: 
{
glutenFree: true,
vegetarian: true,
pescetarian: true,
vegan: true,
dairyFree: true,
nutFree: true,
hindu: true,
jewish: true,
muslim: true,
}
price: 11.25
picture:   
}

var A4 = {
name: "squash cake with caramelized apples"
description: "apricot, pumpkin mousse, raspberry, almond"
ingredients: "apricot, pumpkin mousse, raspberry, almond"
restrictions: 
{
glutenFree: true,
vegetarian: true,
pescetarian: true,
vegan: true,
dairyFree: true,
nutFree: false,
hindu: true,
jewish: true,
muslim: true,
}
price: 11.25
picture:   
}

var B1 = {
name: "chestnut tagliatelle pasta"
description: "lemon, shallot, balsamic, creamed greens"
ingredients: "lemon, shallot, balsamic, creamed greens"
restrictions: 
{
glutenFree: false,
vegetarian: true,
pescetarian: true,
vegan: false,
dairyFree: false,
nutFree: false,
hindu: true,
jewish: true,
muslim: true,
}
price: 11.25
picture:   
}

var B2 = {
name: "citrus & delicata squash salad"
description: "watercress, olives, dates, creamy sherry dressing"
ingredients: "watercress, olives, dates, creamy sherry dressing"
restrictions: 
{
glutenFree: true,
vegetarian: true,
pescetarian: true,
vegan: true,
dairyFree: true,
nutFree: true,
hindu: true,
jewish: true,
muslim: true,
}
price: 11.25
picture:   
}

var B3 = {
name: "creamy herbed risotto"
description: "braised red cabbage, salsify, sunchoke, cider"
ingredients: "braised red cabbage, salsify, sunchoke, cider"
restrictions: 
{
glutenFree: true,
vegetarian: true,
pescetarian: true,
vegan: false,
dairyFree: true,
nutFree: true,
hindu: true,
jewish: true,
muslim: true,
}
price: 11.25
picture:   
}

var B4 = {
name: "lemon tapioca parfait"
description: "huckleberry, coconut, cinnamon cookie"
ingredients: "huckleberry, coconut, cinnamon cookie"
restrictions: 
{
glutenFree: true,
vegetarian: true,
pescetarian: true,
vegan: true,
dairyFree: true,
nutFree: true,
hindu: true,
jewish: true,
muslim: true,
}
price: 11.25
picture:   
}