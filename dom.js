console.log('hello')
let test=document.getElementsByClassName('list-group-item')

test[2].style.backgroundColor='green'
for(let i=0;i<test.length;i++){
    test[i].style.fontWeight='bold'
    test[i].style.color='red'
}