const { response } = require('express');
const express = require('express')
const cors = require('cors')
const app = express();
const PORT = 8000;

app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

console.log('yippu')

const pokemon = require('./data/pokemonlist.js')
const weaknessChart = require('./data/typeweakness.js')

//create some data to send back

app.get('/', (req, res) => {
    res.sendFile("index.html")
})

app.get('/api/pokemon', (req, res) => {
    res.json({pokemon})
})

app.get('/api/weakness', (req, res) => {
    res.json({weaknessChart})
})


app.get('/api/:name', (req, res) => {
   try{

       let pokename = convertString(req.params.name)
       if(pokemon.pokemon[pokename]){
           res.json(pokemon.pokemon[pokename])
        }
        else
        res.json('invalid request - check spelling for errors')
    }
    })


app.listen(PORT, function(){
    console.log('listening in')
})



function convertString(str){
    //format string to prevent any errors with capitilization
    let temp = str.toLocaleLowerCase().trim()
    temp=temp[0].toUpperCase().concat(temp)
    return temp;
}
