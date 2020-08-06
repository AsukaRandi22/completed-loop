var x= 1;
while ( x < 21){
    //check divisibility
    var divisibleBy3= (x % 3 === 0);
    var divisibleBy5= (x % 5 === 0);
  //print Julia, James, or JuliaJames
  if (divisibleBy3 && divisibleBy5){
      console.log("JuliaJames")
  } else {
      if (divisibleBy3 && !divisibleBy5){
          console.log("Julia");
      } else if (!divisibleBy3 && divisibleBy5){
          console.log("James");
      } else {
          console.log(x);
      }
  }
  // increment x
  x++;
}