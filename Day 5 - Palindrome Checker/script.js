const btn = document.querySelector('.btns');
const check = document.querySelector('.result');


btn.addEventListener('click', palindrome);

function palindrome(){
const text = document.querySelector('.text').value;

// madam
// noon
const len = text.length;
const start = text.substring(0, Math.floor(len/2));
// - => waxay la mid tahy cun inta hore 
const end = text.substring(len - Math.floor(len/2) );

const flip = [...end].reverse().join("");
// alert(flip)

if(start == flip){
    check.innerHTML = `Your word ${text.toUpperCase()} is palindrome`;
}
else{
    
    check.innerHTML = `Your word ${text.toUpperCase()} is not palindrome`;
}
}