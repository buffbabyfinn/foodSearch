var bunkSandwiches = {
name: "Bunk Sandwiches",
cuisine: ["sandwiches","brunch"],
rating: 4,
price-range: 1,
location: "string of lat-long?",
restrictions: ["glutenfree: false", "vegan: true", "vegetarian: true", "pescatarian: true", "nutallergy: true", "hindu: true", "jewish: true", "muslim: true", "dairyfree: true"],
menu-items:[bunkItem1, bunkItem2, bunkItem3]
}

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
