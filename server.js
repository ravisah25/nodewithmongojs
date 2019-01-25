const expree = require('express')
const app = expree();
const bodyParser = require('body-parser')
const mongo = require('mongojs')


app.use(bodyParser.json());

var port = 4000;
app.listen(port, () =>{
    console.log(`port = ${port}`)
})