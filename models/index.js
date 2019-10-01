const monk = require('monk')

const DbPassword = process.env.DbPassword
const DbName = process.env.DbName
const DbUsername = process.env.DbUsername

// const dbUrl = `mongodb+srv://jmullen:${process.env.DbName}@cluster0-onieb.mongodb.net/${process.env.DbName}?retryWrites=true&w=majority`
const dbUrl = `mongodb://${DbUsername}:${DbPassword}@cluster0-shard-00-00-bztde.mongodb.net:27017,cluster0-shard-00-01-bztde.mongodb.net:27017,cluster0-shard-00-02-bztde.mongodb.net:27017/${DbName}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true`
const dbRequest = monk(dbUrl)

const home = dbRequest.get('Home')
const kitchen = dbRequest.get('Kitchen')
const bedroom = dbRequest.get('Bedroom')
const festival = dbRequest.get('Festival')
const survival =  dbRequest.get('Survival')

module.exports = {
    home,
    kitchen,
    bedroom,
    festival,
    survival
};