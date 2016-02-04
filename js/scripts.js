//restaurants is an array filled with objects defined in restaurant_data.js
var restaurants = [R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11];
//Search object constructor
function Search(limits, results) {
  // this.location = location;
  // this.cuisine = cuisine;
  this.limits = [];
  this.results = [];
}


Restaurant.prototype.menuMatcher = function(userInput) {
  var that = this.restrictionMatch;
  // debugger;
  this.menuItems.forEach(function(item) {
    var itemMatch = userInput.every(function (val) {
      return item.restrictions.indexOf(val) >= 0;
    });

    if (itemMatch === true){
      that.push("<li><b>" + item.name + "</b>:<br><i>" + item.ingredients + "</i>- " + item.price + "</li>");
    }
<<<<<<< HEAD
});
  return that;
}
=======
  });
  return that;
};
>>>>>>> 34bcaaab0c6b62831cc255dc45d52669f1b7827a

Restaurant.prototype.menuList = function(userInput) {

  return this.menuMatcher(userInput).join("");
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
    return newSearch.results;
}



// function menuItemParser(restaurantItems) {
//   debugger;
//   restaurantItems.forEach(function(item) {
//     menuArray.push(item.name);
//   });
//     menuArray = menuArray.toString();
//     return menuArray;
// }

// function menuAssemble(restaurantItems) {
//   restaurantItems.pluck()
// }


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
<<<<<<< HEAD
<<<<<<< HEAD
      $(".restaurantResults").append("<div class='exampleResult " + restaurant.reference +"'><div class='row'><div class='col-md-7'><h2><span id='resultName'>" + restaurant.name + "</span></h2><h4 class='resultCuisine'>" + restaurant.cuisine +  "</h4><h4 class='resultLocation'>1234 Location Street</h4><p class='resultInformation'>Basic information about the restaurant will go in here if available.</p></div><div class='col-md-5 pull-right'><ul>" + restaurant.menuList(newSearch.limits) + "</ul></div></div></div></div>");
=======
      $(".restaurantResults").append("<div class='exampleResult " + restaurant.reference +"'><div class='row'><div class='col-md-7'><h2><span id='resultName'>" + restaurant.name + "</span></h2><h4 class='resultCuisine'>" + restaurant.cuisine +  "</h4><h4 class='resultLocation'>" + restaurant.location + "</h4><p class='resultInformation'>Basic information about the restaurant will go in here if available.</p></div><div class='col-md-5 pull-right'><ul>" + restaurant.menuList(newSearch.limits) + "</ul></div></div></div></div>");
>>>>>>> 34bcaaab0c6b62831cc255dc45d52669f1b7827a
=======
      $(".restaurantResults").append("<div class='exampleResult " + restaurant.reference +"'><div class='row'><div class='col-md-7'><h2><span id='resultName'>" + restaurant.name + "</span></h2><h4 class='resultCuisine'>" + restaurant.cuisine +  "</h4><h4 class='resultLocation'>" + restaurant.location + "</h4><p class='resultInformation'>" + restaurant.phone + "</p></div><div class='col-md-5 pull-right'><ul>" + restaurant.menuList(newSearch.limits) + "</ul></div></div></div></div>");

>>>>>>> 64edb23c9949c4b255f837db35815c99974b7cd7

      restaurant.restrictionMatch = [];
    });


    // reset the value of results and limits to empty arrays
    newSearch.results = [];
    newSearch.limits = [];

    //prevent default behavior of form submittal
    event.preventDefault();

    // $(".exampleResult").click(function() {
    // this.remove();
    // });
  });

});
