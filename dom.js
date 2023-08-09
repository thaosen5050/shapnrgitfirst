let form=document.getElementById('addForm');
let itemList=document.getElementById('items');

for(let i=0;i<itemList.children.length;i++){
    let edtBtn=document.createElement('button');
    edtBtn.className='btn btn-danger btn-sm float-right delete'
    edtBtn.appendChild(document.createTextNode('edit'))
    itemList.children[i].appendChild(edtBtn)
}


form.addEventListener('submit' , addItem);

itemList.addEventListener('click' , del);

function addItem(e){
    e.preventDefault();
    console.log('1');
    let newadd=document.getElementById('item').value;

    let newli=document.createElement('li');
    newli.className='list-group-item';
    newli.appendChild(document.createTextNode(newadd));

    let newBtn=document.createElement('button');
    newBtn.className="btn btn-danger btn-sm float-right delete";
    newBtn.appendChild(document.createTextNode('X'));
    newli.appendChild(newBtn);

    let edtBtn=document.createElement('button');
    edtBtn.className='btn btn-danger btn-sm float-right delete'
    edtBtn.appendChild(document.createTextNode('edit'))
    newli.appendChild(edtBtn)
    
    itemList.appendChild(newli);

    
}

function del(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let delEle=e.target.parentElement;
            itemList.removeChild(delEle);
        }
    }
}



