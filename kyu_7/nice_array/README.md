# Nice Array

Details found [here](https://www.codewars.com/kata/nice-array)

#### Instructions

A Nice array is defined to be an array where for every value n in the array, there is also an element n-1 or n+1 in the array.

#### Provided tests

describe("Nice Array", _=>{
  it("sample tests", _=>{
Test.assertDeepEquals(isNice([2,10,9,3]),true);
Test.assertDeepEquals(isNice([3,4,5,7]),false);
  });
});

#### Languages completed

- Javascript