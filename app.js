let userScore = 0; 
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


function getCompueterChoice(){
  const choices =["rock", "paper", "scissors"];
  const randomNumber = (Math.floor(Math.random() * 3));
  return choices[randomNumber];
} 

function convertToWeapon(weapon) {
  if (weapon === 'rock') return "Rock";
  if (weapon === 'paper') return "Paper";
  return "Scissors";
}

function win(user, computer){
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWeapon(user)} beats ${convertToWeapon(computer)}. You Win!`;
}

function lose(user, computer){
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWeapon(user)} loses to ${convertToWeapon(computer)}. You Lost!`;
};

function draw(){
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `Its a Draw!`;
};

function game(userChoice){
  const computerChoice = getCompueterChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break; 
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, computerChoice);
      break;
  };
};

function main() {
  rock_div.addEventListener('click', function(){
    game("rock");
  });

  paper_div.addEventListener('click', function(){
    game("paper");
  });

  scissors_div.addEventListener('click', function(){
    game("scissors");
  });
};

main();