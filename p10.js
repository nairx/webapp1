const obj = {
    email:"john@gmail.com",
    password:"1234"
}

// obj.role = "admin"
// console.log(obj)
// obj.active = true
// console.log(obj)

const newObj = {...obj,role:"admin"}
console.log(newObj)