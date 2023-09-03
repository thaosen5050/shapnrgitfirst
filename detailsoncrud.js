let form=document.getElementById('my-form');

let userList=document.getElementById('users')


form.addEventListener('submit' , formSub);
userList.addEventListener('click' , delUser);
userList.addEventListener('click' , editUser);


axios.get('https://crudcrud.com/api/4017a8c2370f4e20acfaa604ad9fb532/aplicationData')
.then(res=>{
    let axobj=res.data;
    //console.log(res)
    axobj.forEach((x)=>{
            let crudName=x.Name;
            let crudMail=x.Mail;
            //let id=x._id;
            //console.log(id);
            let newName=document.createElement('li');
            newName.className='item';
            newName.appendChild(document.createTextNode(crudName+' '));
            newName.appendChild(document.createTextNode(crudMail))

            let newBtnEdit=document.createElement('button');
            newBtnEdit.appendChild(document.createTextNode('Edit'));
            newName.appendChild(newBtnEdit);

            let newBtn=document.createElement('button');
            newBtn.appendChild(document.createTextNode('Delete'));
            newName.appendChild(newBtn);

            userList.appendChild(newName);
        })
    
})
.catch(err=>console.log(err))



function formSub(e ){
    let Name=document.getElementById('name').value;
    let Mail=document.getElementById('email').value;

    //localStorage.setItem( Mail , Name)
    let obj ={
       Name ,
        Mail 
    };
    
        axios.post('https://crudcrud.com/api/4017a8c2370f4e20acfaa604ad9fb532/aplicationData' , obj)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    
    
    
    
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

    let oldName=delEle.firstChild.textContent;
    let oldMail=delEle.firstChild.nextSibling.textContent;
   // localStorage.removeItem(delEle.firstChild.nextSibling.textContent)
   axios.get('https://crudcrud.com/api/4017a8c2370f4e20acfaa604ad9fb532/aplicationData')
    .then(res=>{
    let axobj=res.data;
    
    axobj.forEach((x)=>{
            let crudName=x.Name;
            let crudMail=x.Mail;
            let id=x._id;
            if (oldMail==crudMail){
                let obj={
                    crudName,
                    crudMail,
                };
                axios.delete(`https://crudcrud.com/api/4017a8c2370f4e20acfaa604ad9fb532/aplicationData/${id}`)
                .then(res=console.log(obj)
                )}
        })
    })
    .catch(err=>console.log(err))
    
    
    userList.removeChild(delEle);
}

function editUser(e){
    let edtEle=e.target.parentElement;

    let oldName=edtEle.firstChild.textContent;
    let oldMail=edtEle.firstChild.nextSibling.textContent;

    document.getElementById('name').value=oldName;
    document.getElementById('email').value=oldMail;

    axios.get('https://crudcrud.com/api/4017a8c2370f4e20acfaa604ad9fb532/aplicationData')
    .then(res=>{
    let axobj=res.data;
    
    axobj.forEach((x)=>{
            let crudName=x.Name;
            let crudMail=x.Mail;
            let id=x._id;
            if (oldMail==crudMail){
                let obj={
                    crudName,
                    crudMail,
                };
                
                 axios.delete(`https://crudcrud.com/api/4017a8c2370f4e20acfaa604ad9fb532/aplicationData/${id}`)
                 .then(res=console.log(obj))
                
            }
        })
    })
    .catch(err=>console.log(err))

   // localStorage.removeItem(edtEle.firstChild.nextSibling.textContent)
    
    userList.removeChild(edtEle);
}

