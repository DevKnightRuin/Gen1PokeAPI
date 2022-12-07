const requestButton = document.querySelector('input');
requestButton.addEventListener('click', load)

function load(){
    console.log('btn working')
    fetch('localhost:8000/api/pokemon/abra')
        .then((data) => console.log(data));
}



