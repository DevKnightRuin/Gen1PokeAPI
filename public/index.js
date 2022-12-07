const requestButton = document.querySelector('input');
requestButton.addEventListener('click', load)

function load(){
    console.log('btn working')
    fetch('localhost:8000/api/pokemon/abra')
        .then((data) => console.log(data));
}



const pokemon = {
    'Bulbasaur': {
            'type': ['grass', 'poison'],
            'sprites':{
                'front': 'red-blue\transparent\1.png',
                'back': 'red-blue\transparent\back\1.png'
            }
        }
    }