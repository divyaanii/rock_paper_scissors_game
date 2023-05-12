let score=JSON.parse( localStorage.getItem('score')) ||  { 
  wins:0,
  losses:0,
  ties:0
};
 
updateScoreElement();
/*
if(!score){
score={
  wins:0,
  losses:0,
  ties:0
};
}
*/
function playGmae(playerMove)
{
  const computerMove=pickComputerMove(); 

let result='';

if(playerMove ==='scissors')
{
  if(computerMove === 'rock')
{
result='you lost';
}
else if(computerMove ==='paper')
{
result='you win';
}
else if(computerMove ==='Scissors')
{
result='tie';
}
}

else if(playerMove ==='paper')
{
  
if(computerMove === 'rock')
{
result='you win';
}
else if(computerMove ==='paper')
{
result='tie';
}
else if(computerMove ==='Scissors')
{
result='you lost';
}
}
else if(playerMove === 'rock')
{
if(computerMove === 'rock')
{
  result='tie';
}
else if(computerMove ==='paper')
{
  result='you lost';
}
else if(computerMove ==='Scissors')
{
  result='you win';  
}
}

if(result==='you win'){
score.wins +=1;
}
else if(result==='you lost'){
score.losses +=1;
}
else if(result==='tie'){
score.ties  +=1;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML=result;

document.querySelector('.js-moves').innerHTML=`You
<img src=" ${playerMove}-emoji.png" alt="" class="move-icon">
<img src=" ${computerMove}-emoji.png" alt="" class="move-icon">
Computer`
} 


function updateScoreElement(){

document.querySelector('.js-score' )
.innerHTML=`Wins:${score.wins},Losses:${score.ties},Ties:${score.losses}`;
}
   
function pickComputerMove()
{
  const randomNumber=Math.random();

  let computerMove='';

if(randomNumber>=0 && randomNumber<1/3)
{
computerMove= 'rock';
}
else if(randomNumber>=1/3 && randomNumber<2/3)
{
computerMove='paper';
}
else if(randomNumber>=2/3 && randomNumber<1)
{
computerMove='Scissors';
}
return computerMove;
}