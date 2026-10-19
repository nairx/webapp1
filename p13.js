let user = {
    id: 1,
    name: "John",
    email: "john@gmail.com",
    role: "admin"
}


// let user = null;


if (user?.email) {
    console.log("Show Home Page")
}
else {
    console.log("Show Login Page")
}