let form=document.getElementById('my-form');

let userList=document.getElementById('users')

form.addEventListener('submit' , formSub);

let flag=0;
axios.get('https://crudcrud.com/api/cd2e29aec79840cda2ef97f5ff30b9d9/aplicationData')
.then(res=>{
    let axobj=res.data;
    let num=0;
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
            newBtnEdit.addEventListener('click' , editUser);

            let newBtn=document.createElement('button');
            newBtn.appendChild(document.createTextNode('Delete'));
            newName.appendChild(newBtn);
            newBtn.addEventListener('click' , delUser);

            userList.appendChild(newName);
            num++;
        })
}).catch(err=>console.log(err))

// for (let i=0;i<userList.length;i++){
//     userList.children[i].a
// }
let num=0;
function formSub(e ){
    let Name=document.getElementById('name').value;
    let Mail=document.getElementById('email').value;

    //localStorage.setItem( Mail , Name)
    let obj ={
       Name ,
        Mail 
    };
    if (flag==0){
        axios.post('https://crudcrud.com/api/cd2e29aec79840cda2ef97f5ff30b9d9/aplicationData' , obj)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }else{
        axios.put(`https://crudcrud.com/api/cd2e29aec79840cda2ef97f5ff30b9d9/aplicationData/${flag}` ,obj)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
     }
    
     e.preventDefault();

    let newName=document.createElement('li');
    newName.className='item';
    newName.appendChild(document.createTextNode(Name+' '));
    newName.appendChild(document.createTextNode(Mail))

    let newBtnEdit=document.createElement('button');
    newBtnEdit.appendChild(document.createTextNode('Edit'));
    newName.appendChild(newBtnEdit);
    
    newBtnEdit.addEventListener('click' , editUser);

    let newBtn=document.createElement('button');
    newBtn.appendChild(document.createTextNode('Delete'));
    newName.appendChild(newBtn);
    
    newBtn.addEventListener('click' , delUser);

    userList.appendChild(newName);
    console.log(userList)
     num++;
}

function delUser(e){
    let delEle=e.target.parentElement;
    let oldName=delEle.firstChild.textContent;
    let oldMail=delEle.firstChild.nextSibling.textContent;
   // localStorage.removeItem(delEle.firstChild.nextSibling.textContent)
   axios.get('https://crudcrud.com/api/cd2e29aec79840cda2ef97f5ff30b9d9/aplicationData')
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
                axios.delete(`https://crudcrud.com/api/cd2e29aec79840cda2ef97f5ff30b9d9/aplicationData/${id}`)
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

    axios.get('https://crudcrud.com/api/cd2e29aec79840cda2ef97f5ff30b9d9/aplicationData')
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
                flag=id;
            }
        })
    })
    .catch(err=>console.log(err))

   // localStorage.removeItem(edtEle.firstChild.nextSibling.textContent)
    
    userList.removeChild(edtEle);
}

