// try{
//     a=10
//     console.log(a)
// }
// catch(error){
//     console.log("Something went wrong")
//     console.log(error.message)
// }
// finally{
//     console.log("Product Completed Successfully")
// }

function checkAge(age){
    try{
        if (age<18){
            throw new Error("Age must be 18 or above")
        }
        else{
            console.log("Welcome")
        }
    }
    catch(error){
        console.log("Somethng went wrong")
        console.log(error.message)
    }
}

checkAge(9)
