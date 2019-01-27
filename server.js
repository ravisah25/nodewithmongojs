const expree = require('express')
const app = expree();
const bodyParser = require('body-parser')
const baseRouter = require('./src/router/index')




app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use('/v1/data', baseRouter);

var port = 4000;
app.listen(port, () => {
    console.log(`port = ${port}`)
})