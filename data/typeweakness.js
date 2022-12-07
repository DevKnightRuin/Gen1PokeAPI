const weaknessChart = {
    'normal':{
        'weakness':['fighting']
    },
    'normal':{
        'weakness': ['fighting']
    },
    'fire':{
        'weakness':['water',  'ground',  'rock']
    },
    'water':{
        'weakness':['electric',  'grass']
    },
    'grass':{
        'weakness':['fire',  'ice',  'poison', 'flying', 'bug']
    },
    'electric':{
        'weakness':['ground']
    },
    'ice':{
        'weakness':['fire',  'fighting',  'rock']
    },
    'fighting':{
        'weakness':['flying','psychic'],
    },
    'poison':{
        'weakness':['ground',  'psychic', 'bug']
    },
    'ground':{
        'weakness':['water',  'grass',  'ice']
    },
    'flying':{
        'weakness':['electric',  'ice',  'rock']
    },    
    'psychic':{
        'weakness':['bug'],
    },
    'bug':{
        'weakness':['fire', 'poison', 'flying', 'rock']
    },
    'rock':{
        'weakness':['water',  'grass',  'fighting', 'ground']
    },
    'ghost':{
        'weakness':['ghost']
    },
    'dragon':{
        'weakness':['ice',  'dragon']
    },
}
module.exports={weaknessChart}


