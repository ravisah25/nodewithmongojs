const mongo = require('mongojs')

const db = mongo('mongodb://localhost:27017/employeeDB',[])


module.exports = db;