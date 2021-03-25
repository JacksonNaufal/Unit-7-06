let age = 15
let guess = 0

while (guess != age) {
 guess = prompt (' Guess My Age! ')
 if (age > guess) { 
  alert ('Way to Low!') 
 } else if (guess < 100) { 
  alert (' heyyyy im not that old!') 
 } else if (guess >= 100)  {
  alert ('hey way to high!')
 }
}
alert ('You Got it!')
document.write ('CONGRATULATIONS YOU WIN!')



