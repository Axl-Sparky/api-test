const express = require('express');
const app = express()
app.set('json spaces', 2)

app.get('/', (req, res) => {
  res.json({
    creator: 'Unknown One'
  })})

app.get('/axl', (req, res) => {
  res.json({
    creator: 'Ajsal-Sparky'
  })})
  

app.listen(8080, () => {
  console.log('running')
})
