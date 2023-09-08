let form=document.getElementById('myForm');
let itemList=document.getElementById('items');

axios.get('https://crudcrud.com/api/88b89a5d9eb440e98f66049e83ac9622/projectData')
.then(res=>{
    let axobj=res.data;
    let num=0;
    //console.log(res)
    axobj.forEach((x)=>{
        let crudName=x.itemName;
        let crudDesc=x.itemDesc;
        let crudPrice=x.itemPrice;
        let crudQuant=x.itemQuant;

        let newItem=document.createElement('li');
        newItem.appendChild(document.createTextNode(crudName+' '));
        newItem.appendChild(document.createTextNode(crudDesc+' '));
        newItem.appendChild(document.createTextNode(crudPrice+' '));
        newItem.appendChild(document.createTextNode(crudQuant+' '));

        let newbuy1=document.createElement('button');
        newbuy1.appendChild(document.createTextNode('Buy1'));
        newItem.appendChild(newbuy1);
        newbuy1.addEventListener('click' , buy1);

        let newbuy2=document.createElement('button');
        newbuy2.appendChild(document.createTextNode('Buy2'));
        newItem.appendChild(newbuy2);
        newbuy2.addEventListener('click' , buy2);

        let newbuy3=document.createElement('button');
        newbuy3.appendChild(document.createTextNode('Buy3'));
        newItem.appendChild(newbuy3);
        newbuy3.addEventListener('click' , buy3);

        itemList.appendChild(newItem);
        
                
        })
}).catch(err=>console.log(err));

form.addEventListener('submit', submitAct);

function submitAct(e){
    let itemName=document.getElementById('name').value;
    let itemDesc=document.getElementById('desc').value;
    let itemPrice=document.getElementById('price').value;
    let itemQuant=document.getElementById('quant').value;
    e.preventDefault();
    let obj = {
        itemName,
        itemDesc,
        itemPrice,
        itemQuant
    }
    
         axios.post('https://crudcrud.com/api/88b89a5d9eb440e98f66049e83ac9622/projectData' , obj)
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
    
    

    let newItem=document.createElement('li');
    newItem.appendChild(document.createTextNode(itemName+' '));
    newItem.appendChild(document.createTextNode(itemDesc+' '));
    newItem.appendChild(document.createTextNode(itemPrice+' '));
    newItem.appendChild(document.createTextNode(itemQuant+' '));

    let newbuy1=document.createElement('button');
    newbuy1.appendChild(document.createTextNode('Buy1'));
    newItem.appendChild(newbuy1);
    newbuy1.addEventListener('click' , buy1);

    let newbuy2=document.createElement('button');
    newbuy2.appendChild(document.createTextNode('Buy2'));
    newItem.appendChild(newbuy2);
    newbuy2.addEventListener('click' , buy2);

    let newbuy3=document.createElement('button');
    newbuy3.appendChild(document.createTextNode('Buy3'));
    newItem.appendChild(newbuy3);
    newbuy3.addEventListener('click' , buy3);

    itemList.appendChild(newItem);
    
     
}

function buy1(e){
    
    let quantEle=e.target.parentElement;
    let listItem=quantEle.firstChild.textContent;
    let Quant=quantEle.firstChild.nextSibling.nextSibling.nextSibling.textContent;
    Quant=Number(Quant);
    Quant=Quant-1;
    quantEle.firstChild.nextSibling.nextSibling.nextSibling.textContent=`${Quant}`;
    
    axios.get('https://crudcrud.com/api/88b89a5d9eb440e98f66049e83ac9622/projectData')
    .then(res=>{
    let axobj=res.data;
    
    axobj.forEach((x)=>{
            let crudName=x.itemName;
            let crudDesc=x.itemDesc;
            let crudPrice=x.itemPrice
            let id=x._id;
            
            if (listItem==crudName+" "){
                
                axios.put(`https://crudcrud.com/api/88b89a5d9eb440e98f66049e83ac9622/projectData/${id}` , {
                    itemName : crudName,
                    itemDesc : crudDesc,
                    itemPrice : crudPrice,
                    itemQuant : Quant
                })
                .then(res=>console.log(res))
                .catch(err=>console.log(err))
            }
        })
    })
    .catch(err=>console.log(err))
}

function buy2(e){
    let quantEle=e.target.parentElement;
    let listItem=quantEle.firstChild.textContent;
    let Quant=quantEle.firstChild.nextSibling.nextSibling.nextSibling.textContent;
    Quant=Number(Quant);
    Quant=Quant-2;
    quantEle.firstChild.nextSibling.nextSibling.nextSibling.textContent=`${Quant}`;
    
    axios.get('https://crudcrud.com/api/88b89a5d9eb440e98f66049e83ac9622/projectData')
    .then(res=>{
    let axobj=res.data;
    
    axobj.forEach((x)=>{
            let crudName=x.itemName;
            let crudDesc=x.itemDesc;
            let crudPrice=x.itemPrice
            let id=x._id;
            
            if (listItem==crudName+" "){
                
                axios.put(`https://crudcrud.com/api/88b89a5d9eb440e98f66049e83ac9622/projectData/${id}` , {
                    itemName : crudName,
                    itemDesc : crudDesc,
                    itemPrice : crudPrice,
                    itemQuant : Quant
                })
                .then(res=>console.log(res))
                .catch(err=>console.log(err))
            }
        })
    })
    .catch(err=>console.log(err))
}
function buy3(e){
    let quantEle=e.target.parentElement;
    let listItem=quantEle.firstChild.textContent;
    let Quant=quantEle.firstChild.nextSibling.nextSibling.nextSibling.textContent;
    Quant=Number(Quant);
    Quant=Quant-3;
    quantEle.firstChild.nextSibling.nextSibling.nextSibling.textContent=`${Quant}`;
    
    axios.get('https://crudcrud.com/api/88b89a5d9eb440e98f66049e83ac9622/projectData')
    .then(res=>{
    let axobj=res.data;
    
    axobj.forEach((x)=>{
            let crudName=x.itemName;
            let crudDesc=x.itemDesc;
            let crudPrice=x.itemPrice
            let id=x._id;
            
            if (listItem==crudName+" "){
                
                axios.put(`https://crudcrud.com/api/88b89a5d9eb440e98f66049e83ac9622/projectData/${id}` , {
                    itemName : crudName,
                    itemDesc : crudDesc,
                    itemPrice : crudPrice,
                    itemQuant : Quant
                })
                .then(res=>console.log(res))
                .catch(err=>console.log(err))
            }
        })
    })
    .catch(err=>console.log(err))
}