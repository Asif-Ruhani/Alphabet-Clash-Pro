
let LifeLine=3;
let Score=0;

 
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


document.addEventListener('keyup', function(event){
   // console.log(event.key);    // kon key ta press korlam seta jante parbo "parameter.key" dile
   const PressedKey=event.key.toLocaleUpperCase();

   const getRandomAlphabet=document.getElementById('RandomAlphabet').innerText;
   console.log('Random alphabet: ',getRandomAlphabet);
   console.log('Your have pressed: ',PressedKey);

   if(getRandomAlphabet==PressedKey){
      // console.log('Right');
      Score+=1;
      console.log('Score: ',Score);
   }
   else{
      // console.log('Wrong');
      LifeLine-=1;
      console.log('Life line: ',LifeLine);
   }

});   



function EnterPlaySection(){
  
    const Score=document.getElementById('SomeScreen');
    Score.classList.add('DisplayHidden');

   
    const PlayGround=document.getElementById('PlayGround');
    PlayGround.classList.remove('DisplayHidden');

    ContinueGame();
   

}

