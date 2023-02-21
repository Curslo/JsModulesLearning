const {JSONDatabase} = require("./app")

const jsonDb = new JSONDatabase()
const Richard = {
    Name : "Richard",
    sex : "male",
    age : 29
}
console.log("starting")
jsonDb.writeAndUpdateJsonFile("./db/richard.json", Richard)
jsonDb.jsonReader("./db/richard.json", (data) =>{
    console.log(data)
    console.log("File Read")
})
console.log("Ending")