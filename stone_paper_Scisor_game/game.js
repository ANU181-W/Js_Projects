let player=document.getElementById("user")
let comp=document.getElementById("comp")
const choices = document.querySelectorAll('.card');
let result=document.getElementById("result")
let restart=document.getElementById("restart")
   const scoreboard={
     player:0,
     cpu:0
   }
 
function play(e) {
  const playerChoice = e.target.id;
  const computerChoice = generate();
  const winner = getWinner(playerChoice, computerChoice);
   //console.log(playerChoice,computerChoice,winner)
   Show_Winner(playerChoice,computerChoice,winner)
   restart.style.display="inline-block"
   result.style.display="block"
     }

  


  function generate() {
    let cpui = Math.floor(Math.random()*3)
    let x=['stone','paper','scissor'][cpui]
    return x
  
  }

  function getWinner(p, c) {
    if (p === c) {
      return 'Its a tie.So,Game is drawn!!!!!';
    } else if (p === 'stone') {
      if (c === 'paper') {
        return 'The winner is cpu...';
      } else {
        return 'The winner is player.....';
      }
    } else if (p === 'paper') {
      if (c === 'scissor') {
        return 'The winner is cpu...';
      } else {
        return 'The winner is player.....';
      }
    } else if (p === 'scissor') {
      if (c === 'stone') {
        return 'The winner is cpu...';
      } else {
        return 'The winner is player.....';
      }
    }
  }

   const Show_Winner=(playerChoice,computerChoice,winner)=>{
          if(winner==='The winner is player.....'){
             scoreboard.player++
              result.innerHTML=
              `<h1><p>player:${playerChoice}   cpu:${computerChoice}</p>  ${winner}</h1>`
          }  
          else if(winner==='The winner is cpu...'){
            scoreboard.cpu++
             result.innerHTML=
             `<h1><p>player:${playerChoice}   cpu:${computerChoice}</p>  ${winner}</h1>`
         }
         else{
          result.innerHTML=`<h1><p>player:${playerChoice}   cpu:${computerChoice}</p> ${winner}</h1>`
         }  
         player.innerHTML=`<p>player:${scoreboard.player}</p>`
         comp.innerHTML= `<p>cpu:${scoreboard.cpu}</p>`     

   }
   const restart_game=()=>{
     scoreboard.player=0
     scoreboard.cpu=0
     player.innerHTML=`<p>player:0</p>`
     comp.innerHTML= `<p>cpu:0</p>`
     result.style.display='none'
     restart.style.display='none' 
   }
  choices.forEach(choice=>choice.addEventListener('click',play));
  restart.addEventListener('click',restart_game)