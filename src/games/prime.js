import readlineSync from 'readline-sync';

const prime = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(
    `Hello, ${name}!\nAnswer "yes" if given number is prime. Otherwise answer "no".`,
  );
  function test(n) {
    if (n === 1) return false;
    if (n === 2) return true;
    for (let x = 2; x < n; x += 1) {
      if (n % x === 0) return false;
    }
    return true;
  }
  for (let i = 1; i < 4; i += 1) {
    const x = Math.round(Math.random() * 10 + 1);
    const result = test(x) ? 'yes' : 'no';
    console.log(`Question: ${x}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === String(result)) {
      console.log('Correct!');
    } else {
      return console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${result}'\nLet's try again, ${name}!`,
      );
    }
  }
  console.log(`Congratulations, ${name}!`);
  return '';
};
export default prime;
