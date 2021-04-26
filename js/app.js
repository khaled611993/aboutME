'use strict';

let yourName=prompt('hello, and wellcome in my bage ,my name is khaled,what is your name?');
alert(' wellcome ' +  yourName  +' nice to meet you ');
console.log(yourName);


let  a = prompt('did you read the biography?');

if (a.toLowerCase()=='yes' 
||'y'){
    alert('thank you to spend a minute  of your time to read it');
}else{
    alert('can you read it , i want your  opinion');
}console.log(a);

let b= prompt('are you interested to play a Guessing game ?');

if (b.toLowerCase()=='yes'||'y') {alert('the game begans now');
    
} else {alert('come on give it a try');

    
}
console.log(b);
let c=prompt('do you think iam still living in jordan?');
if (c.toLowerCase()=='yes'||'y') {alert('good guess,iam still. ');
    
} else {alert('i wish if your answer is true');
    
}
console.log(c);

let d=prompt('do you think i study programing for fun');
   if (d.toLowerCase()=='yes'||'y') {alert('no,it is just to try somthing new');
    
} else {alert('well done that\'s Correct answer');
    
}
console.log(d);

let e=prompt('Did you enjoy the questions?');
if (e.toLowerCase()=='yes'||'y') {alert('thank you, this more fun for me');
    
} else {alert('I\'m sorry for being annoying');
    
}
console.log(e);