function main(callback){
console.log("This is main function")
callback()
}


main(()=>{console.log("CallBack Function")})