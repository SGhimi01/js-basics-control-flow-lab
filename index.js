

function scuberGreetingForFeet(distance,){
  
  let charges; 
  if (distance <= 400) {
    charges = 'This one is on me!';
  } else if ((distance >= 2000) && (distance <2499)) {
    charges = 'I will gladly take your thirty bucks.';
  } else if (distance >= 2500)  {
    charges = 'No can do.';
  }
  
  return `${charges}`;
}
console.log(scuberGreetingForFeet("2501"));



function ternaryCheckCity(city){
  // Write your code here!

return (city === "NYC" ? 'Ok, sounds good.' : 'No go.');

}

console.log(ternaryCheckCity("Pittsburge"));


function switchOnCharmFromTip(tip){
  // Write your code here!
  let greet;
  switch (tip) {
    case "generous":
      greet = "Thank you so much.";
      break;
    case "not as generous":
      greet = "Thank you.";
      break;
    default: 
      greet = "Bye.";
  }
  
  return `${greet}` ;

}


console.log(switchOnCharmFromTip("generous"));