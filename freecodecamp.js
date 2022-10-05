//boolean value
function test (myCondition) {
    if (myCondition) {

        console.log("it was true");
      return "It was true";
    }

    console.log("it was false");
    return "It was false";
  }
  
  test(true);
  test(false);