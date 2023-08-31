
let posts=[]
   
function printPost() {
    
    posts.forEach((post )=> {
        console.log(post.data)
   })
   
}



let entry = async()=>{
    function createPost() {
    
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                
                posts.push( {data : 'newpost'});
                resolve('posted')
            }, 1000)
        }) 
    }

    function updateLastUserActivityTime(){
        return new Promise( (resolve, reject) => {
             setTimeout( () => {
                 let ti = new Date();
                 posts.push( {data : ti});
                 resolve('last seen')
             }, 1000)
         }) 
     } 

     function deletePost(){
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                posts.pop();
                posts.pop();
                resolve('last after deletion')
            }, 2000)
        }) 
    }
    await Promise.all([createPost(),updateLastUserActivityTime()])
    
    let out = Promise.all([createPost(),updateLastUserActivityTime(),deletePost()])
    printPost()
    return out
}
entry().then((res)=>{console.log(res)})

