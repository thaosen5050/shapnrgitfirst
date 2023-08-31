console.log('person1 : ticket')
console.log('person2 : ticket')

const preMovie= async ()=>{
    const promiseWifeBringTicket= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket')
        }, 3000)
    })

    const getPopcorn = new Promise((resolve,reject)=>{
            resolve( 'popcorn')
        })

    const getButter = new Promise((resolve,reject)=>{
            resolve( 'butter')
    })
    
    const getColdDrinks = new Promise((resolve,reject)=>{
        resolve( 'Drinks')
    })
    let tick=await promiseWifeBringTicket
    console.log(`wife : got ${tick}`)
    console.log('husband : we should go in')
    console.log('wife : i am hungry')

    let pop =await getPopcorn
    console.log(`husband : got ${pop}`)
    console.log('husband : we should go in')
    console.log('wife : i need butter')

    let but=await getButter
    console.log(`husband : got ${but}`)
    console.log('husband : anything else')
    console.log('wife : we got everything')
    console.log('wife : we need dinks')

    let drink=await getColdDrinks
    console.log(`husband : got ${drink}`)
    console.log('husband : anything else')
    console.log('wife : we definitely got everything')

    return tick
}

preMovie().then((res)=>console.log(`give movie ${res}`))
console.log('person4 : ticket')
console.log('person5 : ticket')