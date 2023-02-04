import readlineSync from "readline-sync";


const welcome = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log("Hello, " + name + "!\nAnswer \"yes\" if the number is even, otherwise answer \"no\".");
    for (let i=1 ; i<4; i++) {
        let num = Math.round(Math.random() * 100);
        let result = num % 2 === 0 ? 'yes' : 'no';
        console.log('Question: '+num);
        const answer = readlineSync.question('Your answer: ');
        if (answer === String(result)) {
            console.log('Correct!');
        } else {
            return console.log("'"+answer+"'" + " is wrong answer ;(. Correct answer was " + "'"+result+"'" + ".\n" +
                "Let's try again, " + name + "!");
        }
    }
    console.log('Congratulations, '+name+'!');
};
export default welcome;