const age = 15
let guess = 0

while (guess !== age) {
  guess = prompt(' Guess My Age! ')
  guess = parseInt(guess)
  if (age > guess) {
    alert('Way to Low!')
  } else if (guess > 15) {
    alert(' heyyyy im not that old!')
  }
}
alert('You Got it!')
document.write('CONGRATULATIONS YOU WIN!')
