//this file is used to store the restaurant objects

function Restaurant (name, reference, cuisine, services, rating, price_range, location, phone, restrictions, menuItems, information, picture, restrictionMatch) {
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
this.information = information;
this.restrictionMatch = [];
}

//Natural Selection Restaurant Object

var R1 = new Restaurant ("Natural Selection", "naturalSelection", ['european'], ["dinner"], 5, 3, "3033 NE Alberta Street, 97214", "503.328.2865", ["glutenFree", "vegetarian", "pescatarian", "vegan", "dairyFree", "hindu", "kosher", "halal"], [R1M1, R1M2, R1M3, R1M4, R1M5, R1M6, R1M7],"Natural Selection is a restaurant built on vegetables, fruits and grains.  Served in a warm european-style setting, the cuisine features both rustic and modern cooking techniques while highlighting the flavors of  France, Italy and Spain.");

//Bunk Sandwiches Restaurant Object
var R2 = new Restaurant ("Bunk Sandwiches", "bunkSandwiches", ["sandwiches", "american"], ['lunch','dinner','brunch'], 4, 1, "1028 SE Water Ave, 97214", "503.288.5883",  ["vegan", "vegetarian", "pescatarian", "nutAllergy", "hindu", "kosher", "halal" , "dairyFree"], [R2M1, R2M2, R2M3, R2M4, R2M5, R2M6, R2M7, R2M8], "Lots of tasty sandwiches");

//Ataula Restaurant Object
var R3 = new Restaurant ("Ataula", "ataula", ["spanish"], ["dinner"], 5, 3, "1818 NW 23rd Pl 97210", "503.894.8904", ['glutenFree', 'vegetarian', 'pescatarian', 'vegan', 'nutAllergy', 'dairyFree', 'kosher','halal'], [R3M1, R3M2, R3M3, R3M4, R3M5, R3M6, R3M7, R3M8], 'Located in NW Portland, Ataula is the perfect destination where old and new come together as Cristina Baez and chef Jose Chesa put a modern interpretation on the traditional Spanish ‘tapeo’ culture. Chef Jose will transport you to his homeland with dishes rooted in Catalunya and other Spanish regions, meanwhile updating and advancing their flavors by utilizing the Northwest’s bounty of fresh ingredients.');

//The Original Dinerant Restaurant Object
var R4 = new Restaurant ("The Original Dinerant", "originalDinerant", ["american","diner"], ["breakfast","brunch","lunch","dinner"], 4, 2, "300 SW 6TH Ave 97204", "503.546.2666", ['glutenFree','vegetarian','pescatarian','nutAllergy','kosher','halal'], [R4M1, R4M2, R4M3, R4M4, R4M5, R4M6, R4M7, R4M8], "In the 1950s and 60s, diners and supper clubs were social hubs, places we gathered to end our days or begin our nights. The menus were comprised of comfort foods brought to this country by the immigrants who shaped it, and were refined to satisfy contemporary tastes. The Original, the downtown destination for all-day Portland dining, renews that spirit for the 21st century by serving up playful variations on the classic standards in an atmosphere that’s stylish, sophisticated and cool. So, settle into a spacious booth for a comforting brunch or a brisk business lunch. Stretch out in our plush retro-luxe banquette for an elegant dinner. Unwind at our candle-lit bar for that much deserved post-prandial nightcap. At the Original, we honor the past as we listen in on the pulse of Portland’s adventurous and evolving tastes.");

// The Waffle Window Restaurant Object
var R5 = new Restaurant ("The Waffle Window", "waffleWindow", ["american","fast-food"], ["breakfast","brunch","lunch","dinner"], 5,  1, "2624 NE Alberta St 97211", "503.265.8031",  ['vegetarian','pescatarian','nutAllergy','kosher','halal'], [R5M1, R5M2, R5M3, R5M4, R5M5, R5M6, R5M7, R5M8], 'The Story of the Waffle Window began back in 2006 when Mary decided that her two sons, Max and Brendan, should have the opportunity to travel the world. Soon her boys headed off to start a month long journey around Europe. While staying with their Aunt and Uncle in Amsterdam her sons were captivated by the people, the history and of course the food. Among the many new and exciting things that they tried, one item stood out above the rest; the Waffles. On one of the first phone calls Mary received from the boys, her son Brendan (a lifelong aficionado of breakfast foods) said to her “Mom, the waffles over here are incredible! We are definitely bringing some back for you, because you have to figure out how to make these!”');

//Screen Door Restaurant Object
var R6 = new Restaurant ("Screen Door", "screenDoor", ["southern","cajun"], ["breakfast","brunch","lunch","dinner"], 5, 1, "2337 East Burnside St 97214", "503.542.0880", ['vegetarian','pescatarian','nutAllergy','kosher','halal'], [R6M1, R6M2, R6M3, R6M4, R6M5, R6M6, R6M7], "Screen Door presents a celebration of Southern cuisine from the quintessential hearty fare to the everyday foods gathered fresh from the garden. Central to our concept is weaving the rich bounty of local fresh produce found here in the Northwest into our menu.");

//Luc Lac Restaurant Object
var R7 = new Restaurant("Luc Lac", "lucLac", ["vietnamese"], ["lunch", "dinner", "happy hour", "late night"], 4, 3, "835 SW 2nd Ave 97204", "503.222.0047",  ['glutenFree','vegetarian','pescatarian','vegan','dairyFree','hindu','kosher','halal','nutAllergy'], [R7M1, R7M2, R7M3, R7M4, R7M5, R7M6, R7M7, R7M8], "We are just one big, pho sling’n, fish sauce cookin', cocktail pourin', Portland lovin' family.");

//Ox Restaurant Object
var R8 = new Restaurant ("Ox", "ox", ["argentinian"], ["dinner"], 4, 3, "2225 NE MLK Blvd 97212", "503.284.3366", ['glutenFree','vegetarian','pescatarian','vegan','dairyFree','hindu','kosher','halal','nutAllergy'], [R8M1, R8M2, R8M3, R8M4, R8M5, R8M6, R8M7, R8M8, R8M9, R8M10], "​OX Restaurant finds inspiration in the wood-fired grilling tradition of Argentina, and with it, the culinary heritage of Spain, France and Italy.")

//Le Pigeon Restaurant Object
var R9 = new Restaurant ("Le Pigeon",  "lePigeon", ["french"], ["dinner"], 5, 3, "738 E Burnside St 97214", "503.546.8796", ['glutenFree','vegetarian','pescatarian','dairyFree','hindu','kosher','halal','nutAllergy'], [R9M1, R9M2, R9M3, R9M4, R9M5, R9M6, R9M7, R9M8, R9M9], "Le Pigeon serves adventurous French-inspired food, along with a varied selection of wines in an intimate dining room on Portland’s East Burnside Street. We take reservations at our communal tables, and offer our chef's counter for walk-ins.");

//Ava Gene's Restaurant Object
var R10 = new Restaurant ("Ava Gene's", "avaGenes", ["italian"], ["dinner"], 4, 3, "3377 SE Division St 97202", "971.229.0571", ['glutenFree','vegetarian','pescatarian','vegan','dairyFree','hindu','kosher','halal','nutAllergy'], [R10M1, R10M2, R10M3, R10M4, R10M5, R10M6, R10M7, R10M8, R10M9, R10M10], "Our Roman inspired menu is simple and rustic with an emphasis on the best local produce and meats grown and raised by Pacific Northwest farmers and ranchers. A regional Italian wine list complements the spirit of the cuisine. A creative cocktail menu & extensive selection of amari and grappa are served from our beautiful marble bar. Salute!");

//Paadee Restaurant Object
var R11 = new Restaurant ("Paadee", "paadee", ["thai"], ["lunch","dinner"],  3, 2, "6 SE 28th Ave 97214", "503.360.1453", ['glutenFree','vegetarian','pescatarian','vegan','dairyFree','hindu','kosher','halal','nutAllergy'], [R11M1, R11M2, R11M3, R11M4, R11M5, R11M6, R11M7, R11M8, R11M9], "Paa Dee literally means 'to bring good things'. The concept is simple – To provide good things is to walk the path of happiness. Paa Dee aspirations to bring to Portland our favorite Thai dishes and to bring the spotlight to Thai comfort food.");
