let form = document.querySelector('form');

form.onsubmit = sendData;

function sendData(e){

    e.preventDefault();

    let formData = new FormData(form)

    let Params = {

        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: formData.get('name')
        }),
        method:"POST"    
    }
    fetch('http://localhost:3001/formData', Params)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err=> console.log(err))
}
