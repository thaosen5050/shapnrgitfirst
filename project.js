
let form=document.getElementById('proForm');
let cat=document.getElementById('cate');
let expList=document.getElementById('spending');

form.addEventListener('submit',formSubmit);
expList.addEventListener('click', delExp );
expList.addEventListener('click', edtExpb);

for (let i = 0; i < localStorage.length; i++){
    let locExp=localStorage.getItem(localStorage.key(i))
    let locDescr=localStorage.key(i);
    
    let newlocExp=document.createElement('li');
    newlocExp.appendChild(document.createTextNode(locExp+" "));
    newlocExp.appendChild(document.createTextNode(locDescr))
    
    let newlocDelBtn=document.createElement('button');
    newlocDelBtn.appendChild(document.createTextNode('Delete'));
    newlocExp.appendChild(newlocDelBtn);

    let newlocEdtBtn=document.createElement('button');
    newlocEdtBtn.appendChild(document.createTextNode('Edit'));
    newlocExp.appendChild(newlocEdtBtn);

    expList.appendChild(newlocExp)
}

function formSubmit(e){
    let expense=document.getElementById('numid').value;
    let descr=document.getElementById('desc').value;
    let option=document.getElementById('cate').value;

    localStorage.setItem( option+" "+descr , expense);

    e.preventDefault();

    let newExp=document.createElement('li');
    newExp.appendChild(document.createTextNode(expense+" "));
    newExp.appendChild(document.createTextNode(option+" "+descr))
   
    
    let newDelBtn=document.createElement('button');
    newDelBtn.appendChild(document.createTextNode('Delete'));
    newExp.appendChild(newDelBtn);

    let newEdtBtn=document.createElement('button');
    newEdtBtn.appendChild(document.createTextNode('Edit'));
    newExp.appendChild(newEdtBtn);

    expList.appendChild(newExp)
}

function delExp(e){
    let delExp=e.target.parentElement;
    let delDes=delExp.firstChild.nextSibling.textContent;
    
    localStorage.removeItem(delDes)
    expList.removeChild(delExp);
    
}

function edtExpb(e){
    let edtExp=e.target.parentElement;
    let oldExp=edtExp.firstChild.textContent;
    let oldDescr=edtExp.firstChild.nextSibling.textContent;
    let arr=oldDescr.split(" ");
    let onlyDesc="";
    //console.log(edtExp.firstChild.nextSibling.textContent)
    for (let i=1;i<arr.length;i++){
       onlyDesc=onlyDesc+arr[i]+" ";
            
    }
    
    document.getElementById('numid').value=parseInt(oldExp);
    document.getElementById('desc').value=onlyDesc;
    document.getElementById('cate').value=arr[0];
    
    localStorage.removeItem(edtExp.firstChild.nextSibling.textContent)

    expList.removeChild(edtExp);
}