// Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind.
// You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/".
// Your task is to check the head for stray hairs and get rid of them.
// You should return the original string, but with any stray hairs removed.

//Keep count of them though, as there is a second element you need to return:
// Test.describe("Example tests",_=>{
//     Test.assertSimilar(bald('/---------'), ['----------', 'Unicorn!']);
//     Test.assertSimilar(bald('/-----/-'), ['--------', 'Homer!']);
//     Test.assertSimilar(bald('--/--/---/-/---'), ['---------------', 'Careless!']);
//     });

// 0 hairs --> "Clean!"
// 1 hair --> "Unicorn!"
// 2 hairs --> "Homer!"
// 3-5 hairs --> "Careless!"
// >5 hairs --> "Hobo!"

const expect = require("chai").expect;
const slaphead = require("../codeWarsSolutions/slaphead.js");

describe("Slaphead codewar", function() {
  it(`for 1 stray hair, it should shave off all the hair and confirm it's an Unicorn`, function() {
    expect(slaphead.bald("/---")).to.be.deep.equal(["----", "Unicorn!"]);
  });

  it(`for 2 stray hair, it should shave off all the hair and confirm it's a Homer`, function() {
    expect(slaphead.bald("/--/")).to.be.deep.equal(["----", "Homer!"]);
  });

  it(`for 3-5 stray hair, it should shave off all the hair and confirm it's a Homer`, function() {
    expect(slaphead.bald("--/--/---/-/---")).to.be.deep.equal([
      "---------------",
      "Careless!"
    ]);
  });

  it(`for more than 5 stray hair, it should shave off all the hair and confirm it's a Homer`, function() {
    expect(slaphead.bald("//////")).to.be.deep.equal(["------", "Hobo!"]);
  });

  it(`for 0 stray hair, it should shave off all the hair and confirm it's a Homer`, function() {
    expect(slaphead.bald("-----")).to.be.deep.equal(["-----", "Clean!"]);
  });

  it(`ugh`, function() {
    expect(slaphead.bald("---/---/-//-----/--")).to.be.deep.equal([
      "-------------------",
      "Careless!"
    ]);
  });
});
