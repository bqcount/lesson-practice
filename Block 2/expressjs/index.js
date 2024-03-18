const morgan = require('morgan')
const express = require('express');
const app = express();

app.use(morgan('dev'))

function parseJson(req, res, next){
    req.body = JSON.parse(req.body)
    next()
}
//app.use Middlewares
app.use(express.json());
app.use(secondMiddleware);
app.use(thirdMiddleware);
app.use(express.static('public'));

function secondMiddleware(req, res, next) {
  console.log("Passing throught second middleware");
  next();
}

function thirdMiddleware(req, res, next) {
  console.log("Passing throught third middleware");
  next();
}

app.get('/users', (req, res) => {
    console.log(req.query)
    res.send('User list')
})

app.get('/users/:id', (req, res) => {
    console.log(req.params.id)
    res.send('One User')
})

app.post('/users', (req, res)=>{
    console.log(req.body)
    res.send('User created')
})

app.put('/users/:id', (req, res)=>{
    console.log(req.params.id)
    res.send('User updated')
})


app.listen(2222, (err) => {
    if(err) throw new Error(err)

    console.log('API Server running on port 3000');

});

