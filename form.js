let form=document.getElementById('my-form');
let del=document.getElementById('Del')

let userList=document.getElementById('users')
let x=1;
form.addEventListener('submit' , formSub);
del.addEventListener('click' , delUser);

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
    //console.log(JSON.parse(localStorage.getItem(Mail)))
    let newName=document.createElement('li');
    newName.className='item';
    newName.appendChild(document.createTextNode('Name: '+Name+' '+' Email: '+Mail));
    
    userList.appendChild(newName);

}

function delUser(e){
   
        let Name=document.getElementById('name').value;
        let Mail=document.getElementById('email').value;
        let delList=document.getElementById('users');
        let objD={
            nameobj : Name ,
            mailobj : Mail
        }
    
        let objStrngD=JSON.stringify(objD);
        if (localStorage.getItem(Mail)==objStrngD){
            localStorage.removeItem(Mail);
        }
        
        console.log(delList.children.length)
        for (let i=0;i<delList.children.length;i++){
            if (delList.children[i].textContent=='Name: '+Name+' '+' Email: '+Mail){
                delList.removeChild(delList.children[i])
            }
        }

}