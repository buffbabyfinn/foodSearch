describe('meetsRestrictions', function(){
  it("locates restaurants that meet multiple criteria", function(){
    var newSearch = new Search();
    expect(meetsRestrictions(["dairyFree", "nutAllergy"])).to.eql([R2, R3, R7, R8, R9, R10, R11]);
  });
});

describe('Restaurant', function(){
  var newSearch = new Search();
  // it("locates restaurants that meet multiple criteria", function(){
  //   expect(R2.menuMatcher(["dairyFree"])).to.eql([R2M2.name]);
  // });
  it("locates restaurants that meet multiple criteria", function(){
    expect(R2.menuList(["dairyFree"])).to.equal("Peanut Butter & Jelly");
  });
});
