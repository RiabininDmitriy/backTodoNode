const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const cors = require('cors')

var app = express()
app.use(cors())
app.use(bodyParser.json())
let todo = []


app.get('/todo', function (req, res) {
  console.log(todo)
  res.status(201).send(todo)

})
app.post('/todo', function (req, res) {
  try {
    const id = todo.length + 1
    todo.push({ ...req.body, id: id })
    res.status(201).send(req.body)
  } catch (err) {
    console.log("what&.")
  }
})

app.put('/todo/:id', function (req, res) {
  for (const todoItem of todo) {
    if (todoItem.id === +req.params.id) {
      todoItem.done = req.body.done

    }
  }
  res.status(201).send(req.body)
})

app.delete('/todo/:id', function (req, res) {
  todo = todo.filter((item)=>{
    return(item.id !== +req.params.id)
  })
}
)


app.listen(3001, function () {
  console.log('Example app listening on port 3000!')

});