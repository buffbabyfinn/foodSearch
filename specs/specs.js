describe('meetsRestrictions', function(){
  it("locates restaurants that meet multiple criteria", function(){
    var newSearch = new Search();
    expect(meetsRestrictions(["dairyFree", "nutAllergy"])).to.eql([R2, R3]);
  });
});

describe('Restaurant', function(){
  it("locates restaurants that meet multiple criteria", function(){
  var newSearch = new Search();
  newSearch.limits = ["dairyFree, vegetarian"];
    expect(R1.menuMatcher()).to.eql(R1M1.name);
  });
});
