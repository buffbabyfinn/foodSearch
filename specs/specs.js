describe('meetsRestrictions', function(){
  it("locates restaurants that meet multiple criteria", function(){
    expect(meetsRestrictions(["dairyFree", "nutFree"])).to.eql([bunkSandwiches]);
  });
});
