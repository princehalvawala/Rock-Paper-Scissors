const handOptions = {
    "rock": "assets/Rock.png",
    "paper": "assets/Paper.png",
    "scissors": "assets/Scissors.png"
}


let SCORE = 0 ;  // set user score = 0 //
let ComptSCORE = 0;  // set computer score = 0 //

///  1 st part -- //

const pickUserHand = (hand) =>{
    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    // now to show contest result //

    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

  
    // set the user pick //  // LOGIC PART//

    document.getElementById("userPickImage").src = handOptions[hand]; // imp //




    let cpHand = pickComputerHand();
    referee(hand, cpHand);

    
}


//  2nd--- Computer Part ---//

const pickComputerHand = () =>{
    let hands = ["rock","paper","scissors"]
    let cpHand = hands[Math.floor(Math.random()*3)]

    document.getElementById("computerPickImage").src = handOptions[cpHand]; // imp //

    return cpHand;
    
}





// Declaring Winner or Looser : referee part //

const referee = (userHand,cpHand) =>{

    if (userHand == "paper" && cpHand == "scissors") {
        setDecision("YOU LOSE!");
        setComputerScore(ComptSCORE + 1);
        // for hiding Next button if loose //
        let next = document.querySelector(".next")
        next.style.display = "none";
      }
      if (userHand == "paper" && cpHand == "rock") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
        // for Displaying  Next button if loose //
        let next = document.querySelector(".next")
        next.style.display = "flex";
      }
      if (userHand == "paper" && cpHand == "paper") {
        setDecision("It's a tie!");

        let next = document.querySelector(".next")
        next.style.display = "none";
      }
      if (userHand == "rock" && cpHand == "scissors") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);

        let next = document.querySelector(".next")
        next.style.display = "flex";
      }
      if (userHand == "rock" && cpHand == "paper") {
        setDecision("YOU LOSE!");
        setComputerScore(ComptSCORE + 1)

        let next = document.querySelector(".next")
        next.style.display = "none";
      }
      if (userHand == "rock" && cpHand == "rock") {
        setDecision("It's a tie!");

        let next = document.querySelector(".next")
        next.style.display = "none";
      }
      if (userHand == "scissors" && cpHand == "scissors") {
        setDecision("It's a tie!");

        let next = document.querySelector(".next")
        next.style.display = "none";
      }
      if (userHand == "scissors" && cpHand == "rock") {
        setDecision("YOU LOSE!");
        setComputerScore( ComptSCORE + 1)

        let next = document.querySelector(".next")
        next.style.display = "none";
      }
      if (userHand == "scissors" && cpHand == "paper") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);

        let next = document.querySelector(".next")
        next.style.display = "flex";
      }

}



// innertext coming for displaying result [loose,tie,or win] //
const setDecision = (decision) =>{
  document.querySelector(".decision h1").innerText = decision;

}

// for updating user score //
const setScore = (score) =>{
    SCORE = score;
    document.querySelector(".score h1").innerText = score;
}

// for updating computer score //
const setComputerScore = (score) =>{
    ComptSCORE = score;
    document.querySelector(".score1 h1").innerText = score;

    

}

// Play Again button Function (Restart Game) //

const restartGame = () => {
  let hands = document.querySelector(".hands");
  hands.style.display = "flex";

  // now to hide contest result and play again //

  let contest = document.querySelector(".contest");
  contest.style.display = "none";


  // for hiding NEXT button //

  let next = document.querySelector(".next")
  next.style.display = "none";
  
  // for hiding congrats section //

  let congrats = document.querySelector(".congrats");
  congrats.style.display="none";

  let scoreboard = document.querySelector(".scoreboard");
  scoreboard.style.display="flex";

}



// for Displaying RULES //

function displayResult(){

    let rulesimg = document.querySelector(".rules-img");
    rulesimg.style.display = "flex";

}
// for hiding Rules //

function hidingResult(){        // or   const hidingResult = () =>{ } //
    let rulesimg = document.querySelector(".rules-img") ;
    rulesimg.style.display = "none";
}


// 3rd part On clickin next Button //

const finalstep = () => {
  let hands = document.querySelector(".hands");
  hands.style.display = "none";

  // now to show contest result //

  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let scoreboard = document.querySelector(".scoreboard");
  scoreboard.style.display="none";


  let congrats = document.querySelector(".congrats");
  congrats.style.display="block";

  let next = document.querySelector(".next")
  next.style.display = "none";   // for hiding next buton on 3 rd page //


}


