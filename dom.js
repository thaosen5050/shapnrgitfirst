
let test=document.querySelector('.list-group-item:nth-child(2)')
test.style.backgroundColor='green'
let test2=document.querySelector('.list-group-item:nth-child(3)')
test2.style.display='none'
let test3=document.querySelectorAll('li')
test3[1].style.color='green'
let test4=document.querySelectorAll('li:nth-child(odd)')

for(let i=0;i<test4.length;i++){
    
    test4[i].style.backgroundColor='green'
}

