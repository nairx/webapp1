// function add(a,b){
//     return a+b
// }
// console.log(add(4,5))



function add(...arr){
    const total = arr.reduce((sum,num)=>sum+num,0)
    console.log(total)
}

add(4,5,7,8,9,7,7)