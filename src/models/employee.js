var db = require('./index')

async function employeeGet() {
    return new Promise((resolve, reject) => {
        db.employee.find().sort({ name: 1 }, (err, docs) => {
            if (!err) {
                resolve(docs);
            }
        })
    })
}

async function employeePost(data) {
    return new Promise((resolve, reject) => {
        db.employee.insert(data, (err, docs) => {
            resolve(docs);
        })
    })
}


module.exports = { employeeGet, employeePost }

