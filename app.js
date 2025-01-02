let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    //rock, paper, scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //Generate computer choice -> modular
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else if (userChoice === "scissors") {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        // console.log("You Win!!!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!!!your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        // console.log("You Lose.");
        compScore++;
        compScorePara.innerText = userScore;
        msg.innerText = `You Lost!!!${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked.", userChoice);
        playGame(userChoice);
    });
});
