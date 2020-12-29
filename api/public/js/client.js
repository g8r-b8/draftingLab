
//on cur page go to form
let form = document.querySelector('form');

form.onsubmit = sendData;
//define function with fetch
function sendData(e){

    e.preventDefault();

    let formData = new FormData(form)

    let Params = {

        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: formData.get('title')
        }),
        method:"POST"    
    }
    fetch('http://localhost:3001/api/posts', Params)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err=> console.log(err))
}
