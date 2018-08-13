# Simple Bead Count

Details found [here](https://www.codewars.com/kata/simple-beads-count)

#### Instructions

Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

brrbrrbrrbrrbrrb

Implement count_red_beads(N_blue) (in PHP count_red_beads($n); in Java, Javascript countRedBeads(n)) so that it returns the number of red beads.
If there are less than 2 blue beads return 0.

#### Provided tests

describe("Testing", function(){
  it("Basic tests", function(){
    Test.assertEquals(countRedBeads(0), 0);
    Test.assertEquals(countRedBeads(1), 0);
    Test.assertEquals(countRedBeads(3), 4);
    Test.assertEquals(countRedBeads(5), 8);
  });
});

#### Languages completed

- Javascript