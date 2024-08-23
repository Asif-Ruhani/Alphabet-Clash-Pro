


 let LifeLine;
 let Score;















function RemovePressedAlphabetBgColor(ID){
   const bgcolor=document.getElementById(ID);
   bgcolor.classList.remove('SetAlphabetBgColor');  // je button already correctly pressed hoyeche setar bg color remove kore dibe
}







// function ScoreIncrement(){
   
//    return Score;
// }




// function ScoreSection(){
     
//    const totalScore=ScoreIncrement();
   
//    const scoreBoard=document.getElementById('TotalScore');
//    scoreBoard.value=totalScore;
// }







function EnterScoreSection(){
   const PlayGround=document.getElementById('PlayGround');
   PlayGround.classList.add('DisplayHidden');


   const ScoreBoard=document.getElementById('ScoreScreen');
   ScoreBoard.classList.remove('DisplayHidden');

   // ScoreSection();
}






// function LifeLineDecrement(){
  
// }
  





function ContinueGame(){
   const AlphabetString='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   const Alphabets=AlphabetString.split('');

   const Random=Math.round(Math.random()*25);   // 26 letter, 0-25
   const Alphabet=Alphabets[Random];

   const displayRandomAlphabet=document.getElementById('RandomAlphabet'); 
   displayRandomAlphabet.innerText=Alphabet;    // show random alphabet on the display
   // console.log(Alphabet);

    const LowerCaseAlphabet=Alphabet.toLocaleLowerCase();   // making all alphabets to lowercase for getting id, because ids are lowercased.
    const getEachIdOfAlphabets=document.getElementById(LowerCaseAlphabet);   // we got each alphabet id from random alphabet.
   // console.log(AlphabetBgColor);
   getEachIdOfAlphabets.classList.add('SetAlphabetBgColor');  // add background color into pointed id.
   // console.log(AlphabetBgColor);
}


function SetLifeAndScore(){
   LifeLine=5;
   const life=document.getElementById('LifeRemain');
   life.innerText=LifeLine;
   Score=0;
   const CurrentScore=document.getElementById('TotalScore');
   CurrentScore.innerText=Score;
}


function EnterPlaySection(){
  
    const HomeScreen=document.getElementById('HomeScreen');
    HomeScreen.classList.add('DisplayHidden');

    const ScoreScreen=document.getElementById('ScoreScreen');
    ScoreScreen.classList.add('DisplayHidden');

   
    const PlayGround=document.getElementById('PlayGround');
    PlayGround.classList.remove('DisplayHidden');
    

    SetLifeAndScore();

    ContinueGame();  
}






document.addEventListener('keyup', function(event){
   // console.log(event.key);    // kon key ta press korlam seta jante parbo "parameter.key" dile
   const PressedKey=event.key.toLocaleUpperCase();

   const getRandomAlphabet=document.getElementById('RandomAlphabet').innerText;
   // console.log('Random alphabet: ',getRandomAlphabet);
   // console.log('Your have pressed: ',PressedKey);

   if(getRandomAlphabet==PressedKey){
      // console.log('Right');
      RemovePressedAlphabetBgColor(getRandomAlphabet.toLocaleLowerCase());
      Score+=1;
      ContinueGame();
   }
   else{
      LifeLine-=1;
      const LifeRemain=document.getElementById('LifeRemain');
      LifeRemain.innerText=LifeLine;

      if(LifeLine==0){
         RemovePressedAlphabetBgColor(getRandomAlphabet.toLocaleLowerCase());  // lifeline 0 hole je alphabet ta color hoyechilo setar color remove kore dibe, remove na korle pore abar khelte asle oi color ta age thekei roye jabe.
         EnterScoreSection();
      }
   }

}); 







