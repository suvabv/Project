let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("compScore");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const compimg_div = document.getElementById("comp-img");
function getcompChoice(){
  choice = ["r", "p", "s"];
  randomChoice = (Math.floor(Math.random()*3));
   return choice[randomChoice];
}

function choice_img(i){
  if(i == "r")
    return "<img src='images/rock.png'>";
  else if(i == "p")
    return "<img src='images/paper.png'>";
  else
    return "<img src='images/scissors.png'>";
  }
 
 function comp_img(compChoice){
   compimg_div.innerHTML = choice_img(compChoice);
   setTimeout(function () { compimg_div.innerHTML = " " },500);   
 }
  
function choices(c){
  if(c == "r")
    return "Rock";
  else if(c == "p")
    return "Paper";
  else
    return "Scissors";
  }
    
    
function Win(userChoice, compChoice){
  const user = choices(userChoice);
  const comp = choices(compChoice);
  const user_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore; 
  const sub_user = "user".fontsize(2).sub();
  const sub_comp = "comp".fontsize(2).sub();
  result_p.innerHTML = user + sub_user + " beats " + comp + sub_comp + ". You Won!🔥";
  user_div.classList.add("green-glow");
  setTimeout(function () { user_div.classList.remove("green-glow") },300);
  
}

function Lose(userChoice, compChoice){
  const user_div = document.getElementById(userChoice);
  user = choices(userChoice);
  comp = choices(compChoice);
  compScore++;
  compScore_span.innerHTML = compScore;
  const sub_user = "user".fontsize(2).sub();
  const sub_comp = "comp".fontsize(2).sub();
  result_p.innerHTML = comp + sub_comp + " beats " + user + sub_user + ". You Lose!😭";
  user_div.classList.add("red-glow");
  setTimeout(function () { user_div.classList.remove("red-glow") },300);

}

function Draw(userChoice){
  const user_div = document.getElementById(userChoice);
  result_p.innerHTML = "Its a Draw!🥱";
  user_div.classList.add("grey-glow");
  setTimeout(function () { user_div.classList.remove("grey-glow") },300);

}


function game(userChoice){
  compChoice = getcompChoice();
  
  switch(userChoice + compChoice){
    
    case 'rs':
    case 'pr':
    case 'sp':
      Win(userChoice, compChoice);
      comp_img(compChoice);
      break;
      
    case 'sr':
    case 'ps':
    case 'rp':
      Lose(userChoice, compChoice);
      comp_img(compChoice);
      break;
      
    case 'rr':
    case 'ss':
    case 'pp':
      Draw(userChoice);
      comp_img(compChoice);
      break;
      
  }
}

main();
function main(){
  rock_div.addEventListener('click', function(){
    game("r");
  })

  paper_div.addEventListener('click', function(){
    game("p");
  
  })
  
  scissor_div.addEventListener('click', function(){
    game("s");
  })
}