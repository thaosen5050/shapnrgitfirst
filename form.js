let form=document.getElementById('my-form');
console.log(localStorage.getItem('name3'))
let x=1;
form.addEventListener('submit' , formSub);

function formSub(e){
    let Name=document.getElementById('name').value;
    let Mail=document.getElementById('email').value;
    localStorage.setItem(`name${x}` , Name+' '+Mail)
    x=x+1;
    e.preventDefault();
    console.log(Name)
}