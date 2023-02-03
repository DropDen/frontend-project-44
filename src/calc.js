import readlineSync from "readline-sync";

const calc = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log("Hello, " + name + "!\nWhat is the result of the expression?");
    const plu = (a,b)=> a+b;
    const min = (a,b)=> a-b;
    const umn = (a,b)=> a*b;
    const arr = [plu,min,umn];
    for (let i = 0; i<arr.length;i++) {
        const znak = ['+','-','*'];
        let num1 = Math.round(Math.random() * 100);
        let num2 = Math.round(Math.random() * 100);
        let quest = String(num1+znak[i]+num2);
        let res = arr[i](num1,num2);
        console.log(quest);
        const answer = readlineSync.question('Your answer: ');
        if (answer === String(res)){
            console.log('Correct!');
        }else {
            return console.log(answer + " is wrong answer ;(. Correct answer was " + res + ".\n" +
                "Let's try again, " + name + "!");
        }
    }
    console.log('Congratulations, '+name+'!');

};
export default calc;
