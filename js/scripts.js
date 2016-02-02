

var restaurants = [R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11];


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
function menuItemParser() {
  restaurants.menuItems.forEach(function(item) {
      return item.name;
  });
}




$(document).ready(function() {

  $("#dietaryRestrictionsList").submit(function(event) {
    $(".exampleResult").hide();


    $("input:checkbox[name=dietaryOption]:checked").each(function() {
      newSearch.limits.push($(this).val());
    });

    meetsRestrictions(newSearch.limits);

    newSearch.results.forEach(function(restaurant) {
      $(".restaurantResults").append("<div class='exampleResult " + restaurant.reference +"'><div class='row'><div class='col-md-7'><h2><span id='resultName'>" + restaurant.name + "</span></h2><h4 class='resultCuisine'>" + restaurant.cuisine +  "</h4><h4 class='resultLocation'>1234 Location Street</h4><p class='resultInformation'>Basic information about the restaurant will go in here if available.</p></div><div class='col-md-5 pull-right'><ul>" + restaurant.menuItems + "</ul></div></div></div></div>");
    });

    newSearch.results = [];
    newSearch.limits = [];

    event.preventDefault();

    // $(".exampleResult").click(function() {
    //   this.remove();
    // });
  });
});
