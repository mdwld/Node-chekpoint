console.log("hello monami");
const fs = require("fs");
//console.log(fs);
// to use the package of "fs" you need to require it to use the function within it
//step 1 
console.log("starting");
//step 2
//fs.readFile("./file.txt", "utf-8", (err , data) => {
    //err ? console.log(err) : console.log(data.toString());
//})
//step 2 bis
const data = fs.readFileSync("./file.txt");
console.log(data.toString());
// step 3 
console.log("finishing");