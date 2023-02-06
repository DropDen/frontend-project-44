import readlineSync from 'readline-sync';

const nod = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\nFind the greatest common divisor of given numbers.`);
  function nood(n, m) {
    if (m > 0) {
      const k = n % m;
      return nood(m, k);
    }
    return Math.abs(n);
  }
  for (let i = 1; i < 4; i += 1) {
    const x = Math.round(Math.random() * 100);
    const y = Math.round(Math.random() * 100);
    const result = nood(x, y);
    console.log(`Question: ${x} ${y}`);
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
export default nod;
