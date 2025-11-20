const fs =require("fs");

// -----------------use for sync operation
// fs.writeFileSync("output.txt","Hello World from Node");  

// -----------use for async operation
// fs.writeFile("output.txt","Hello World from Node", (err) => {});

//------------------read file sync operation
// const read= fs.readFileSync("./contact.txt", "utf8");
// console.log(read);

//------------------read file async operation
// fs.readFile("./contact.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("error",err);        
//     }else{
//         console.log(result);        
//     }
// })



