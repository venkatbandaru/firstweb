var h1selector = document.querySelector("h1");
var buttonselector = document.querySelector("button");

buttonselector.onclick = function(){
	setUserName();
}

function setUserName(){
	var name = prompt('Please Enter Your Name');
	localStorage.setItem('name',name);
	h1selector.textContent = 'Mozilla is cool, Mr/Mrs. ' + name;
}

console.log(localStorage.getItem('name'));
if(!localStorage.getItem('name')){
setUserName();
}else{
var name = localStorage.getItem('name');
h1selector.textContent = 'Mozilla is cool, Mr/Mrs. ' + name;
}