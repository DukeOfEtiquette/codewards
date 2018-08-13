# Simple validation of a username with regex

Details found [here](https://www.codewars.com/kata/simple-validation-of-a-username-with-regex)

#### Instructions

Write a simple regex to validate a username. Allowed characters are:

- lowercase letters
- numbers
- underscore

Length should be between 4 and 16 characters (both included).

#### Provided tests

Test.describe("Basic tests",_=>{
Test.assertEquals(validateUsr('asddsa'), true);
Test.assertEquals(validateUsr('a'), false);
Test.assertEquals(validateUsr('Hass'), false);
Test.assertEquals(validateUsr('Hasd_12assssssasasasasasaasasasasas'), false);
Test.assertEquals(validateUsr(''), false);
Test.assertEquals(validateUsr('____'), true);
Test.assertEquals(validateUsr('012'), false);
Test.assertEquals(validateUsr('p1pp1'), true);
Test.assertEquals(validateUsr('asd43 34'), false);
Test.assertEquals(validateUsr('asd43_34'), true);
})

#### Languages completed

- Javascript