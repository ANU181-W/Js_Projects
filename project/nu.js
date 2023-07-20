
const hint = document.getElementById("hint");
const noOfGuessesRef = document.getElementById("no-of-guesses");
const guessedNumsRef = document.getElementById("guessed-nums");
const guessInput = document.getElementById("guess");
const checkButton = document.getElementById("check-btn");
let answer, noOfGuesses, guessedNumsArr;
const G_num=()=>{
   answer=Math.random()*100
 
    answer=Number.parseInt(answer)
    console.log(answer)
    noOfGuesses = 0;
    guessedNumsArr = [];
    noOfGuessesRef.innerHTML = "No. Of Guesses: 0";
    guessedNumsRef.innerHTML = "Guessed Numbers are: None";
    guessInput.value = "";
    hint.classList.remove("success", "error");
    
    alert("The Number Generated Successfully.....")
   }
   const play=()=>{
   
const userGuess = guessInput.value;
guessedNumsArr.push(userGuess);
  noOfGuesses += 1;
  if (userGuess != answer) {
    if (userGuess < answer) {
      hint.innerHTML = "The number you entered is less than generated number. Try Again!";
    } else {
      hint.innerHTML = "The number you entered is greater than generated number. Try Again!";
    }
    noOfGuessesRef.innerHTML = `<span>No. Of Guesses:</span> ${noOfGuesses}`;
    guessedNumsRef.innerHTML = `<span>Guessed Numbers are: </span>${guessedNumsArr.join(
      ","
    )}`;
    hint.classList.remove("error");
    setTimeout(() => {
      hint.classList.add("error");
    }, 10);
  } else {
    hint.innerHTML = `Congratulations!<br>The number was <span>${answer}</span>.<br>You guessed the number in <span>${noOfGuesses} </span> attempts.`;
    hint.classList.add("success");}
  }
  
    checkButton.addEventListener("click", play);