const employeesRouter = require('express').Router()
const { employeeGet, employeePost } = require('../models/employee')

employeesRouter.get('/', async (req, res) => {
    let data = await employeeGet();
    res.send(data);
})

employeesRouter.post('/', async (req, res) => {
    let data = await employeePost(req.body);
    res.send(data);
})

module.exports = employeesRouter;