
function ContinueGame(){
   const AlphabetString='abcdefghijklmnopqrstuvwxyz';
   const Alphabets=AlphabetString.split('');

   const Random=Math.round(Math.random()*25);   // 26 letter, 0-25
   const Alphabet=Alphabets[Random];

   const displayAlphabet=document.getElementById('RandomAlphabet');
   displayAlphabet.innerText=Alphabet;
   console.log(Alphabet);

   const AlphabetBgColor=document.getElementById(Alphabet);   // if we write ('Alphabet') with single quation, then it will not work.
   // console.log(AlphabetBgColor);
   AlphabetBgColor.classList.add('SetAlphabetBgColor');
   console.log(AlphabetBgColor);
}

function EnterPlaySection(){
  
    const Score=document.getElementById('SomeScreen');
    Score.classList.add('DisplayHidden');

   
    const PlayGround=document.getElementById('PlayGround');
    PlayGround.classList.remove('DisplayHidden');

    ContinueGame();

}

