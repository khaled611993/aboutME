'use strict';

let score = 0;
function firstOne() {
    
    let yourName = prompt('hello, and wellcome in my bage ,my name is khaled,what is your name?');
    alert(' wellcome ' + yourName + ' nice to meet you ');
    console.log(yourName);
    
    
    let a = prompt('did you read the biography?');
    
    if (a.toLowerCase() == 'yes'|| a.toLowerCase()=='y') {
        alert('thank you to spend a minute  of your time to read it');
        score++;
        
        
    }else if(a.toLowerCase() !== 'yes'||'y') {
        alert('can you read it , i want your  opinion');
    } console.log(a);
}
firstOne();


function secoundOne() {
    
    let b = prompt('are you interested to play a Guessing game ?');
    
    if (b.toLowerCase() == 'yes' ||b.toLowerCase()=='y') {
        alert('the game begans now');
        score++;
    } else {
        alert('come on give it a try');
        
        
    }
    console.log(b);
    let c = prompt('do you think iam still living in jordan?');
    if (c.toLowerCase() == 'yes' ||c.toLowerCase()== 'y') {
        alert('good guess,iam still. ');
        score++;
        
        
    } else if(c.toLowerCase() !== 'yes' ||c.toLowerCase()== 'y') {
        alert('i wish if your answer is true');
        
    }
    console.log(c);
}
secoundOne();
    
   function theiredOne() {
       
       let d = prompt('do you think i study programing for fun');
       if (d.toLowerCase() == 'yes' ||d.toLowerCase()== 'y') {
           alert('no,it is just to try somthing new');
           
        } else {
            alert('well done that\'s Correct answer');
            score++;
            
        }
        console.log(d);
        
        let e = prompt('Did you enjoy the questions?');
        if (e.toLowerCase() == 'yes' ||e.toLowerCase()== 'y') {
            alert('thank you, this more fun for me');
            
        } else {
            alert('I\'m sorry for being annoying');
            
        }
        
        console.log(e);
        
    }
    theiredOne();
        
        let finalQu;
        function forthOne() {
            
            for (let i = 1; i <= 4; i++) {
                finalQu = Number(prompt('If I am a Scorpio, in what month do you think I was born?'));
                
                if (finalQu == 11) {
                    alert('good guess');
                    score++;
                    break;
                    
                    
                }
                
                if (finalQu < 11) {
                    alert('your guess too low ,try agian.');
                } else if (finalQu > 11) {
                    alert('your guess too high ,try agian.');
                }
            } alert('the answer is 11')
            
        }
        forthOne();
        
function sixthOne() {
    
    let answerIn = ['Game of Thrones', 'Breaking Bad', 'Vikings', 'the 100', 'la casa de papel ', 'Dexter'];
    let userInput;
    for (let i = 1; i <= 6; i++) {
        userInput = prompt('name one of my favorit series');
        if (userInput  == answerIn[0] || userInput == answerIn[1] || userInput == answerIn[2] || userInput == answerIn[3] || userInput == answerIn[4] || userInput == answerIn[5]) {
            alert('you are correct');
            score++;
            
            break;
            
        } else if (userInput !== answerIn[i]) { 
            alert('It is wrong answer try again')
        }
    }

}
sixthOne();
    
    alert('my favorit Series are |Game of Thrones|Breaking Bad|Vikings|the 100|la casa de papel|Dexter|');
    alert(`your score is  ${score}  out of 7`);
    