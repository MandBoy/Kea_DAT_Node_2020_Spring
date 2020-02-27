const app = require("express")(); 
const request = require('request');

app.get("/Exercise2", (req, res) => {
    return res.sendFile(__dirname + "/public/index.html");
})

app.listen(3000, error => {
    if (error) {
        console.log("Error running the server", error);
    }
    console.log("Server is running on port", 3000);
});


