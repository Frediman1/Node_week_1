var express = require('express')

var records = express()


var data = require('./employees.json')



records.get('/Employees', (req, res) => {
    if (!data) {
        res.status(404).send('could not find information')
    }
    res.send(data)
})

records.get('/Employees/:id', (req, res) => {

    const findEmployee = data.Employees.find(function (employee) {

        return parseInt(req.params.id) === employee.id
    })







    if (!findEmployee) {
        res.status(404).send('could not find information')
    }
    res.send(findEmployee)
})



records.listen(4000)