const { response } = require('express');
const express = require('express')
const appDir = require('path')
const cors = require('cors')
const app = express();
const PORT = 10000;

app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

console.log('yippu')

const pokemon = require('./data/pokemonlist.js')
const weaknessChart = require('./data/typeweakness.js');
const { status } = require('express/lib/response.js');

//create some data to send back

app.get('/', (req, res) => {
    res.sendFile("index.html")
})

//allows render to verify the server status
app.get('/checkme', (req, res) => {
    const options = { status: 200, statusText: 'ok'}
    res.sendStatus(200)
})


app.get('/api/pokemon', (req, res) => {
    res.json({pokemon})
})

app.get('/api/weakness', (req, res) => {
    res.json({weaknessChart})
})


app.get('/api/pokemon/:name', (req, res) => {

       let pokename = convertString(req.params.name)
       console.log(pokename)
       if(pokemon.pokemon[pokename]){
           res.json(pokemon.pokemon[pokename])
        }
        else{
         res.json('invalid request - check spelling for errors')
        }
})

app.get('/api/pokemon/image/:name', (req, res) =>{
   
    let pokename = convertString(req.params.name)
    console.log(pokename)
    if(pokemon.pokemon[pokename]){
        res.json(pokemon.pokemon[pokename].sprites.front)
     }
     else{
      res.json('invalid request - check spelling for errors')
     }
})

app.listen(PORT, function(){
    console.log('listening in')
})



function convertString(str){
    //format string to prevent any errors with capitilization
    str.toLocaleLowerCase().trim()
    let temp = str.split('')
    temp[0] = str[0].toUpperCase()
    return temp.join('');
}
