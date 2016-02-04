//this file is used to store the restaurant objects

function Restaurant (name, reference, cuisine, services, rating, price_range, location, phone, restrictions, menuItems, restrictionMatch) {
this.name = name;
this.reference = reference;
this.cuisine = cuisine;
this.services = services;
this.rating = rating;
this.price_range = price_range;
this.location = location;
this.phone = phone;
this.restrictions = restrictions;
this.menuItems = menuItems;
this.restrictionMatch = [];
}

//Natural Selection Restaurant Object
var R1 = new Restaurant ("Natural Selection", "naturalSelection", ['european'], ["dinner"], 5, 3, "3033 NE Alberta Street, 97214", "503.328.2865", ["glutenFree", "vegetarian", "pescatarian", "vegan", "dairyFree", "hindu", "kosher", "halal"], [R1M1, R1M2, R1M3, R1M4, R1M5, R1M7, R1M8]);

//Bunk Sandwiches Restaurant Object
var R2 = new Restaurant ("Bunk Sandwiches", "bunkSandwiches", ["sandwiches", "american"], ['lunch','dinner','brunch'], 4, 1, "1028 SE Water Ave, 97214", "503.288.5883",  ["vegan", "vegetarian", "pescatarian", "nutAllergy", "hindu", "kosher", "halal" , "dairyFree"], [R2M1, R2M2, R2M3]);

//Ataula Restaurant Object
var R3 = new Restaurant ("Ataula", "ataula", ["spanish"], ["dinner"], 5, 3, "1818 NW 23rd Pl 97210", "503.894.8904", ['glutenFree', 'vegetarian', 'pescatarian', 'vegan', 'nutAllergy', 'dairyFree', 'kosher','halal'], [R3M1, R3M2, R3M3, R3M4, R3M5, R3M6, R3M7, R3M8]);


//
//The Original Dinerant Restaurant Object
var R4 = new Restaurant ("The Original Dinerant", "originalDinerant", ["american","diner"], ["breakfast","brunch","lunch","dinner"], 4, 2, "300 SW 6TH Ave 97204", "503.546.2666" ['glutenFree','vegetarian','pescatarian','nutAllergy','kosher','halal'], [R4M1, R4M2, R4M3, R4M4, R4M5]);

// The Waffle Window Restaurant Object
var R5 = new Restaurant ("The Waffle Window", "waffleWindow", ["american","fast-food"], ["breakfast","brunch","lunch","dinner"], 5,  1, "2624 NE Alberta St 97211", "503.265.8031",  ['vegetarian','pescatarian','nutAllergy','kosher','halal'], [R5M1, R5M2, R5M3]);

//Screen Door Restaurant Object
var R6 = new Restaurant ("Screen Door", "screenDoor", ["southern","cajun"], ["breakfast","brunch","lunch","dinner"], 5, 1, "2337 East Burnside St 97214", "503.542.0880", ['vegetarian','pescatarian','nutAllergy','kosher','halal'], [R6M1, R6M2, R6M3]);

//Maurice Restaurant Object
var R7 = new Restaurant("Maurice", "maurice", ["french","nordic"], ["lunch"], 4, 3, "921 SW Oak St, 97205", "503.224.9921",  ['glutenFree','vegetarian','pescatarian','vegan','dairyFree','hindu','kosher','halal','nutAllergy'], [R3M1, R3M2]);

//Ox Restaurant Object
var R8 = new Restaurant ("Ox", "ox", ["argentinian"], ["dinner"], 4, 3, "2225 NE MLK Blvd 97212", "503.284.3366", ['glutenFree','vegetarian','pescatarian','vegan','dairyFree','hindu','kosher','halal','nutAllergy'], [R3M1, R3M2])

//Le Pigeon Restaurant Object
var R9 = new Restaurant ("Le Pigeon",  "lePigeon", ["french"], ["dinner"], 5, 3, "738 E Burnside St 97214", "503.546.8796", ['glutenFree','vegetarian','pescatarian','dairyFree','hindu','kosher','halal','nutAllergy'], [R3M1, R3M2]);

//Ava Gene's Restaurant Object
var R10 = new Restaurant ("Ava Gene's", "avaGenes", ["italian"], ["dinner"], 4, 3, "3377 SE Division St 97202", ['glutenFree','vegetarian','pescatarian','vegan','dairyFree','hindu','kosher','halal','nutAllergy'], [R3M1, R3M2]);

//Paadee Restaurant Object
var R11 = new Restaurant ("Paadee", "paadee", ["thai"], ["lunch","dinner"],  3, 2, "6 SE 28th Ave 97214", "503.360.1453" ['glutenFree','vegetarian','pescatarian','vegan','dairyFree','hindu','kosher','halal','nutAllergy'], [R3M1, R3M2]);
