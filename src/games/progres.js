import readlineSync from "readline-sync";

const progres = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log("Hello, " + name + "!\nWhat number is missing in the progression?");
    for (let i=1 ; i<4; i++) {
        let arr = [];
        let j =0;
        let k = 0;
        let plus =0;
        do { j = Math.round(Math.random() * 10);
        } while (j<5);
        do { k = Math.round(Math.random() * 10);
        } while (k>5);
        for( let l =0 ; l<j;l++){
            plus+=k;
            arr.push(plus);
        }
        let result= String(arr[k]);
        arr.splice(k,1,'..');
        console.log('Question: '+ arr.join(' ') );
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
export default progres;