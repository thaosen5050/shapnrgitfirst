console.log('person1 : ticket')
console.log('person2 : ticket')

let promiseWifeBringTicket= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket')
    },5000)
})

let getPopcorn = promiseWifeBringTicket.then((res)=>{
    console.log('wife : got ticket')
    console.log('husband : we should go in')
    console.log('wife : i am hungry')
    return new Promise((resolve,reject)=>{
        resolve(`${res} popcorn`)
    })
})

let getButter = getPopcorn.then((res)=>{
    console.log('husband : got popcorn')
    
    console.log('wife : i need butter')
    return new Promise((resolve,reject)=>[
        console.log(`${res} butter`)
    ])
})

let getColdDrinks = getButter.then((res)=>{
    console.log('husband : got butter')
    console.log('husband : we should go in')
    console.log('wife : i need drinks')
    return new Promise((resolve,reject)=>{
        resolve(`${res} drinks`)
    })
})


getColdDrinks.then((res)=>{console.log(res)})

console.log('person4 : ticket')
console.log('person5 : ticket')