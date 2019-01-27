const employeesRouter = require('express').Router()
const { employeeGet } = require('../models/employee')

employeesRouter.get('/', async (req, res) => {

    let data = await employeeGet();
    res.send(data);
})

module.exports = employeesRouter;