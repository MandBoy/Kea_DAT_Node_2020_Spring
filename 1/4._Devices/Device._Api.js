const app = require("express")(); 

let test1 = {
    id: 1,
    description: "Device 1 - PC"
}
let test2 = {
    id: 2,
    description: "Device 2 - Mac"
}
let test3 = {
    id:3,
    description: "Device 3 - Linux"
}

let number = [test1, test2, test3];

app.get("/", (req, res) => { 
    res.send("Welcome.")
});

app.get("/device/:id",(req, res) => {
    return res.send({ id: req.params.id });
});

app.listen(3000, error => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 3000);
});