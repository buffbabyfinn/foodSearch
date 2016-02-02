var mike_restaurant_1 = {
name: "Natural Selection",
cuisine: ["European"],
rating: 5,
price_range: 3,
location: "45.560957, -122.634061",
restrictions: ["glutenFree", "vegetarian", "pescatarian", "vegan", "dairyFree",  "hindu", "jewish", "muslim"]
}

var restaurant1 = {
name: "The Original Dinerant",
cuisine: ["Breakfast","Brunch","Diner"],
rating: 4,
pricerange: 2,
restrictions: ["glutenFree", "vegetarian", "pescatarian", "nutAllergy", "jewish, muslim"]
}

var bunkSandwiches = {
name: "Bunk Sandwiches",
cuisine: ["sandwiches","brunch"],
rating: 4,
pricerange: 1,
restrictions: ["vegan", "vegetarian", "pescatarian", "nutAllergy", "hindu", "jewish", "muslim", "dairyFree"]
}

var restaurants = [mike_restaurant_1, bunkSandwiches, restaurant1];


function Search(limits, results) {
  // this.location = location;
  // this.cuisine = cuisine;
  this.limits = [];
  this.results = [];
}


var newSearch = new Search();

function meetsRestrictions(userInput) {
    restaurants.forEach(function(restaurant) {
      var restaurantMatch = userInput.every(function (val) {
        return restaurant.restrictions.indexOf(val) >= 0; });
      if (restaurantMatch === true){
        newSearch.results.push(restaurant);
      }
  });
    return newSearch.results;
}


$(document).ready(function() {

  $("#dietaryRestrictionsList").submit(function(event) {

    var newSearch = new Search();

    $("input:checkbox[name=dietaryOption]:checked").each(function() {
      newSearch.limits.push($(this).val());
    });


    console.log(newSearch.limits);
    console.log(meetsRestrictions(newSearch.limits));
    event.preventDefault();
  });
});
