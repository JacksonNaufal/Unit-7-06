const age = 15
let guess = 0
// These are the variables for the guess and the age

while (guess !== age) {
  guess = prompt(' Guess My Age! ')
  guess = parseInt(guess)
  if (age > guess) {
    alert('Way to Low!')
  } else if (guess > 15) {
    alert(' heyyyy im not that old!')
  }
  // These are what happens with what you input if its to high or to low, and the promp that pops up, and what its supposed to say if youre incorrect
}
alert('You Got it!')
document.write('CONGRATULATIONS YOU WIN!')
// These are alerts and what it says if you guess my age correct
