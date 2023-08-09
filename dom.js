let form=document.getElementById('addForm');
let itemList=document.getElementById('items');
let filt=document.getElementById('filter');

for(let i=0;i<itemList.children.length;i++){
    let edtBtn=document.createElement('button');
    edtBtn.className='btn btn-danger btn-sm float-right delete'
    edtBtn.appendChild(document.createTextNode('edit'))
    itemList.children[i].appendChild(edtBtn)
}

form.addEventListener('submit' , addItem);

itemList.addEventListener('click' , del);

filt.addEventListener('keyup' , filtItems)

function addItem(e){
    e.preventDefault();
    
    let newadd=document.getElementById('item').value;
    let newadd2=document.getElementById('itemsecond').value;

    let newli=document.createElement('li');
    newli.className='list-group-item';
    newli.appendChild(document.createTextNode(newadd+' '));
    newli.appendChild(document.createTextNode(newadd2));

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

function filtItems(e){
    let text=e.target.value.toLowerCase();
    let items =itemList.getElementsByTagName('li');
    //console.log(text)
   /* Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        
        if(itemName.toLowerCase().indexOf(text) != -1){
           item.style.display='block'
        }
        else{
            item.style.display='none'
        }
    })*/
    for(let i=0;i<items.length;i++){
        let itemName = items[i].firstChild.textContent;
        let itemName2 = items[i].childNodes[1].textContent;
        console.log(itemName2);
       
        if(itemName.toLowerCase().indexOf(text) != -1){
            items[i].style.display='block'
        }
        else if(itemName2.toLowerCase().indexOf(text) != -1){
            items[i].style.display='block'
        }
        else{
            items[i].style.display='none'
        }
    }
}

