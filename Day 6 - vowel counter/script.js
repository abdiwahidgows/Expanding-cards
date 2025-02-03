const btn = document.querySelector('.btns');
const check = document.querySelector('.result');


btn.addEventListener('click', vowelCouter);



function vowelCouter(){

const arr = ['a' , 'e', 'i' , 'o' , 'u'];

let vowel=0 ;
const text = document.querySelector('.text').value;

for(let a = 0 ; a < text.length ; a++){

    let voweletter  =  text[a];

    if(voweletter.match(/([a,e,i,o,u])/) ){
        vowel ++ ;
    }
}

check.innerHTML = `your text name is ${text} and has ${vowel} vowels `
}
// console.log(arr)