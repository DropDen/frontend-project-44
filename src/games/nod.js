import readlineSync from "readline-sync";

const nod = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log("Hello, " + name + "!\nFind the greatest common divisor of given numbers.");
    for (let i=1 ; i<4; i++) {
        let x = Math.round(Math.random() * 100);
        let y = Math.round(Math.random() * 100);
        function dds(x, y) {
            while (y) {
                var t = y;
                y = x % y;
                x = t;
            }
            return x;
        }
        const result= dds(x,y)
        console.log('Question: '+String(x)+' '+String(y) );
        const answer = readlineSync.question('Your answer: ');
        if (answer === String(result)){
            console.log('Correct!');
        }else {
            return console.log("'"+answer+"'" + " is wrong answer ;(. Correct answer was " + "'"+result+"'" + ".\n" +
                "Let's try again, " + name + "!");
        }
    }
    console.log('Congratulations, '+name+'!');
};
export default nod;