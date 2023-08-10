let form=document.getElementById('my-form');
//console.log(localStorage.getItem('name1'))
//console.log(JSON.parse(localStorage.getItem('name1')))
let userlist=document.getElementById('users')
let x=1;
form.addEventListener('submit' , formSub);

function formSub(e){
    let Name=document.getElementById('name').value;
    let Mail=document.getElementById('email').value;
    let obj={
        nameobj : Name ,
        mailobj : Mail
    }

    let objStrng=JSON.stringify(obj);
    localStorage.setItem( Mail , objStrng)
    x=x+1;
    e.preventDefault();
    //console.log(Name)
    let newName=document.createElement('li');
    newName.className='item';
    newName.appendChild(document.createTextNode('Name: '+Name+' '+' Email: '+Mail));
    userlist.appendChild(newName);

}