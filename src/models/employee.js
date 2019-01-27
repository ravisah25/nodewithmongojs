var db = require('./index')

async function employeeGet() {
    return new Promise((resolve, reject) => {
        db.employee.find({}, (err, docs) => {
            if (!err) {
                resolve(docs);
            }
        })
    })
}


module.exports = { employeeGet }

