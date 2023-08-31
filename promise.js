
let posts=[]
   
function printPost() {
    
    posts.forEach((post )=> {
        console.log(post.data)
   })
   
}



function createPost() {
    
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            
            posts.push( {data : 'newpost'});
            resolve()
        }, 1000)
    }) 
}

function updateLastUserActivityTime(){
   return new Promise( (resolve, reject) => {
        setTimeout( () => {
            let ti = new Date();
            posts.push( {data : ti});
            resolve()
        }, 1000)
    }) 
} 

function deletePost(){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.pop();
            posts.pop();
            resolve()
        }, 2000)
    }) 
}



Promise.all([createPost(),updateLastUserActivityTime()]).then(printPost);
Promise.all([createPost(),updateLastUserActivityTime(),deletePost()]).then(printPost);

