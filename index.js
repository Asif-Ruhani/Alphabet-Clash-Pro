
let LifeLine=5;
const life=document.getElementById('LifeRemain');
life.innerText=LifeLine;

let Score=0;

 







function ScoreSection(){
     
   const totalScore=ScoreIncrement();
   
   const scoreBoard=document.getElementById('TotalScore');
   scoreBoard.value=totalScore;
}







function EnterScoreSection(){
   const PlayGround=document.getElementById('PlayGround');
   PlayGround.classList.add('DisplayHidden');


   const ScoreBoard=document.getElementById('ScoreScreen');
   ScoreBoard.classList.remove('DisplayHidden');

   ScoreSection();
}




function ContinueGame(){
   const AlphabetString='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   const Alphabets=AlphabetString.split('');

   const Random=Math.round(Math.random()*25);   // 26 letter, 0-25
   const Alphabet=Alphabets[Random];

   const displayRandomAlphabet=document.getElementById('RandomAlphabet');
   displayRandomAlphabet.innerText=Alphabet;
   // console.log(Alphabet);
    const alphabet=Alphabet.toLocaleLowerCase();
    const AlphabetBgColor=document.getElementById(alphabet);
   // console.log(AlphabetBgColor);
   AlphabetBgColor.classList.add('SetAlphabetBgColor');
   // console.log(AlphabetBgColor);
}










function RemovePressedAlphabetBgColor(ID){
   const bgcolor=document.getElementById(ID);
   bgcolor.classList.remove('SetAlphabetBgColor');  // je button already correctly pressed hoyeche setar bg color remove kore dibe
}







function ScoreIncrement(){
   const score=document.getElementById('TotalScore');
   score.innerText=Score;
   return Score;
}







function LifeLineDecrement(){
   life.innerText=LifeLine;

   if(LifeLine==0){
      EnterScoreSection();
   }
}









document.addEventListener('keyup', function(event){
   // console.log(event.key);    // kon key ta press korlam seta jante parbo "parameter.key" dile
   const PressedKey=event.key.toLocaleUpperCase();

   const getRandomAlphabet=document.getElementById('RandomAlphabet').innerText;
   // console.log('Random alphabet: ',getRandomAlphabet);
   // console.log('Your have pressed: ',PressedKey);

   if(getRandomAlphabet==PressedKey){
      // console.log('Right');
      RemovePressedAlphabetBgColor(PressedKey.toLocaleLowerCase());
      Score+=1;
      ScoreIncrement();
      ContinueGame();
   }
   else{
      LifeLine-=1;
      LifeLineDecrement();
   }

});   











function EnterPlaySection(){
  
    const Score=document.getElementById('SomeScreen');
    Score.classList.add('DisplayHidden');

   
    const PlayGround=document.getElementById('PlayGround');
    PlayGround.classList.remove('DisplayHidden');

    ContinueGame();
   

}






function PlayAgain(){

   const PlayGround=document.getElementById('ScoreScreen');
   PlayGround.classList.add('DisplayHidden');


   const ScoreBoard=document.getElementById('PlayGround');
   ScoreBoard.classList.remove('DisplayHidden');

   ContinueGame();
}

