let form=document.getElementById('my-form');

let userList=document.getElementById('users')


form.addEventListener('submit' , formSub);
userList.addEventListener('click' , delUser);
userList.addEventListener('click' , editUser);

function formSub(e){
    let Name=document.getElementById('name').value;
    let Mail=document.getElementById('email').value;
    
    localStorage.setItem( Mail , Name)
    
    e.preventDefault();
    
    let newName=document.createElement('li');
    newName.className='item';
    newName.appendChild(document.createTextNode(Name+' '));
    newName.appendChild(document.createTextNode(Mail))

    let newBtnEdit=document.createElement('button');
    newBtnEdit.appendChild(document.createTextNode('Edit'));
    newName.appendChild(newBtnEdit);

    let newBtn=document.createElement('button');
    newBtn.appendChild(document.createTextNode('Delete'));
    newName.appendChild(newBtn);
    
    userList.appendChild(newName);

}

function delUser(e){
    let delEle=e.target.parentElement;
    localStorage.removeItem(delEle.firstChild.nextSibling.textContent)
    userList.removeChild(delEle);
}

function editUser(e){
    let edtEle=e.target.parentElement;

    let oldName=edtEle.firstChild.textContent;
    let oldMail=edtEle.firstChild.nextSibling.textContent;
    
    document.getElementById('name').value=oldName;
    document.getElementById('email').value=oldMail;
    
     

    localStorage.removeItem(edtEle.firstChild.nextSibling.textContent)

    userList.removeChild(edtEle);
}