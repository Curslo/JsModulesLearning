const fs = require('fs')

class JSONDatabase {
    jsonReader(filePath, callBack)  {
        fs.readFile(filePath, (err, fileData)=>{
            if(err){
                console.log(err)
            }
            const results = JSON.parse(fileData)
            console.log("Reading File")
            return callBack(results)
        })
    }

    writeAndUpdateJsonFile(filePath, data) {
        fs.writeFile(filePath, JSON.stringify(data, null, 2), (err)=>{
            if(err){
                console.log("ERROR"+ err)
            }
            console.log("File Written")
        })
    }
}
module.exports = {JSONDatabase}