//your JS code here. If required.
let ptag = document.querySelector('#counter');
let number = Number(ptag.innerText);

let btn = document.querySelector('button');
console.log(btn);
btn.addEventListener('click',()=>{
	number ++;
	ptag.innerText= `${number}`
})
