//'fs' come along with node js, we dont have to install it
const fs = require('fs')
//performing asynchronous callback
const readData = (file,cb) =>{
    fs.readFile(file,(err,data)=>{
        if(err){
            return cb(err);
        }
        const data1 = data.toString().trim().split('\r\n')
        cb(null,data1)
    })
}
readData('./file1',(err,data)=>{
    if(err)
    throw err;
    // data.forEach((item)=>{
    //     if(item%2 == 0){
    //         console.log(item)
    //     }
    // })
    //console.log(data)
    const numbers = data.map(Number);
    //map converts strings into numbers
    const oddNumbers = numbers.filter(number=>number%2 ===1)
    console.log(oddNumbers)
})
console.log('i m first')