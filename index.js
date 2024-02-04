const { log } = require('console');
const fs = require('fs');

// fs.readFileSync('./app.cjs',function(err,info)){
//     if (err) {
//       console.log('err occured ,err')
//     }else
//     console.log('info')

// }

fs.writeFile('./newfil',"tis is fil" ,function (err) {
    if (err){
        console.log(err);
    }
        
    
})