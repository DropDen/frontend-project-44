import readlineSync from 'readline-sync';

const nod = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\nFind the greatest common divisor of given numbers.`);
  function dds(x, y) {
    while (y) {
      const t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  for (let i = 1; i < 4; i += 1) {
    const xx = Math.round(Math.random() * 100);
    const yy = Math.round(Math.random() * 100);
    const result = dds(xx, yy);
    console.log(`Question: ${String(xx)} ${String(yy)}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === String(result)) {
      console.log('Correct!');
    } else {
      return console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${result}'\nLet's try again, ${name}!`
      );
    }
  }
  console.log(`Congratulations, ${name}!`);
  return '';
};
export default nod;
