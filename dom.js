let itemList=document.querySelector('#items');
//console.log(itemList);

//itemList.parentNode.style.backgroundColor='#f4f4f4';
//itemList.parentElement.style.backgroundColor='red';
//console.log(itemList.childNodes);

//console.log(itemList.children);
//itemList.children[2].style.backgroundColor='blue';

//console.log(itemList.firstChild);

//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent='hello';

//console.log(itemList.lastChild);

//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent='hello 2';

//console.log(itemList.nextSibling);
//console.log(itemList.nextElementSibling);

//console.log(itemList.previousSibling);
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color='green';

let newDiv=document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1';
newDiv.setAttribute('title' ,'Hello div');
let newDivText= document.createTextNode('HEllo');
newDiv.appendChild(newDivText);
console.log(newDiv);
let contain=document.querySelector('header .container');
let hh1=document.querySelector('header h1');

contain.insertBefore(newDiv, hh1);



let newDiv2=document.createElement('div');
newDiv2.className='list-group-item';
let newText2= document.createTextNode('HEllo');
let newDiv2Text= document.createTextNode('HEllo');
newDiv2.appendChild(newDiv2Text);
itemList.insertBefore(newDiv2, itemList.children[0]);



