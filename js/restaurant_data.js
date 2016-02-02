//this file is used to store the restaurant objects
//this file does not include menu items contained within each restaurant object

var mike_restaurant_1 = {
name: "Natural Selection",
cuisine: ["European"],
rating: 5,
price_range: 3,
location: "45.560957, -122.634061",
restrictions: ["glutenFree", "vegetarian", "pescetarian", "vegan", "dairyFree",  "hindu", "jewish", "muslim"]
}

var mike_restaurant_2 = {
name: "Ataula",
cuisine: ["Spanish"],
rating: 5,
price_range: 3,
location: "45.535922, -122.699614",
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
},
menu_items:[T1,T2]
}

var restaurant1 = {
name: "The Original Dinerant",
cuisine: ["Breakfast","Brunch","Diner"],
rating: 4,
pricerange: 2,
restrictions: ["glutenFree", "vegetarian", "pescetarian", "nutFree", "jewish, muslim"]
}

var bunkSandwiches = {
name: "Bunk Sandwiches",
cuisine: ["sandwiches","brunch"],
rating: 4,
pricerange: 1,
restrictions: ["vegan", "vegetarian", "pescatarian", "nutFree", "hindu", "jewish", "muslim", "dairyFree"]
}

var restaurants = [mike_restaurant_1, bunkSandwiches, restaurant1];



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



var mike_restaurant_2 = {
name: "Ataula",
cuisine: ["Spanish"],
rating: 5,
price_range: 3,
location: "45.535922, -122.699614",
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
},
menu_items:[T1,T2]
}

var restaurants = [mike_restaurant_1, mike_restaurant_2]



var theOriginalDinerant {
name: "The Original Dinerant",
cuisine: ["Breakfast","Brunch","Diner"],
rating: 4,
price-range: 2,
location: "string of lat-long?"
restrictions: {
  glutenfree: true,
  vegetarian: true,
  pescetarian: true,
  vegan: false,
  dairy-free: false,
  nut-allergy: true,
  hindu: false,
  jewish: true,
  muslim: true
},
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

var theWaffleWindow {
name: "The Waffle Window",
cuisine: ["Breakfast","Brunch","Fast-Food"],
rating: 5,
price-range: 1,
location: "string of lat-long?"
restrictions: {
  glutenfree: false,
  vegetarian: true,
  pescetarian: true,
  vegan: false,
  dairy-free: false,
  nut-allergy: true,
  hindu: false,
  jewish: true,
  muslim: true
},
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

var theScreenDoor {
name: "The Screen Door",
cuisine: ["Southern","Brunch","Cajun"],
rating: 5,
price-range: 1,
location: "string of lat-long?"
restrictions: {
  glutenfree: false,
  vegetarian: true,
  pescetarian: true,
  vegan: false,
  dairy-free: false,
  nut-allergy: true,
  hindu: false,
  jewish: true,
  muslim: true
},
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

var bunkSandwiches = {
name: "Bunk Sandwiches",
cuisine: ["sandwiches","brunch"],
rating: 4,
price-range: 1,
location: "string of lat-long?",
restrictions: {
  glutenfree: false,
  vegetarian: true,
  pescatarian: true,
  vegan: true,
  nut-allergy: true,
  hindu: true,
  jewish: true,
  muslim: true,
  dairyfree: true,
},
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
