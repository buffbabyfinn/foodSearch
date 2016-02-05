//restaurants is an array filled with objects defined in restaurant_data.js
var restaurants = [R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11];
//Search object constructor

function Search() {
  this.limits = [];
  this.results = [];
}

function compare(a, b){
  if (a.restrictionMatch.length < b.restrictionMatch.length) {
    return 1;
  }
  if (a.restrictionMatch.length > b.restrictionMatch.length) {
    return -1;
  }
  if (a.restrictionMatch.length === b.restrictionMatch.length) {
    return 0;
  }
}


Restaurant.prototype.menuMatcher = function(userInput) {
  var that = this.restrictionMatch;
  this.menuItems.forEach(function(item) {
    var itemMatch = userInput.every(function (val) {
      return item.restrictions.indexOf(val) >= 0;
    });

    if (itemMatch === true){
      that.push("<li><b>" + item.name + "</b>:<br><i>" + item.ingredients + "</i>- " + item.price + "</li>");
    }
  });
  return that;
};

Restaurant.prototype.menuList = function() {
  return this.restrictionMatch.join("");
}

Restaurant.prototype.colorChange = function() {
  if (this.restrictionMatch.length >= 7){
    $('.' + this.reference).css("background-color", "#72B239");
  }
  if (this.restrictionMatch.length <= 6 && this.restrictionMatch.length >= 4){
    $('.' + this.reference).css("background-color", "#97D263");
  }
  if (this.restrictionMatch.length < 4 && this.restrictionMatch.length > 0){
    $('.' + this.reference).css("background-color", "#C0EF97");
  }
}



//instantiate a new instance of the Search object and call it newSearch
var newSearch = new Search();

/*
meetsRestrictions is the function used to determine which restaurant objects are
returned to the user.

userInput is the limits array defined in the Search object.

Perform the following function on each element in the restaurants array:

Check to see if the limit exists within the the restrictions property of the restaurant
If the limit exists in that particular restaurants restrictions property then add that restaurant object to
the results property attached to the object called newSearch.

return the value of the results property
*/
function meetsRestrictions(userInput) {
    restaurants.forEach(function(restaurant) {

      var restaurantMatch = userInput.every(function (val) {
        return restaurant.restrictions.indexOf(val) >= 0;
      });

      if (restaurantMatch === true){
        newSearch.results.push(restaurant);
      }
  });

}


//check to make sure document is loaded
$(document).ready(function() {

  //upon click of the button with ID #dietaryRestrictionsList do the following:
  $("#dietaryRestrictionsList").submit(function(event) {

    //hide the element with class of exampleResult
    $(".exampleResult").hide();

    //if a check box is checked, take the value of that checkbox and insert it into the limits array
    // on the Search object called newSearch
    $("input:checkbox[name=dietaryOption]:checked").each(function() {
      newSearch.limits.push($(this).val());
    });

    //pass the the populated limits array to the meetsRestrictions function

    meetsRestrictions(newSearch.limits);

    //for each element in the result array (each element is a restaurant object), append it to the DOM

    newSearch.results.forEach(function(restaurant) {
      restaurant.menuMatcher(newSearch.limits);
    });

    newSearch.results.sort(compare);


     newSearch.results.forEach(function(restaurant) {
      $(".restaurantResults").append("<div class='exampleResult " + restaurant.reference +"'><div class='row'><div class='col-md-6'><h2><span id='resultName'>" + restaurant.name + "</span></h2><h4 class='resultCuisine'>" + restaurant.cuisine +  "</h4><h4 class='resultLocation'>" + restaurant.location + "</h4><p class='resultPhone'>" + restaurant.phone + "</p><div class='row'><img class='restaurantPicture' src = 'img/" + restaurant.reference + ".jpg'><h4 class='resultInformation'>" + restaurant.information +  "</h4></div></div><div class='col-md-6 pull-right'><ul>" + restaurant.menuList() + "</ul></div></div></div></div>");


      restaurant.colorChange();
      restaurant.restrictionMatch = [];
    });


    // reset the value of results and limits to empty arrays
    newSearch.results = [];
    newSearch.limits = [];

    //prevent default behavior of form submittal
    event.preventDefault();

  });

});
