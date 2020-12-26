const axios = require('axios');

function getTodos(){
    axios({
        method:'get',
        url:'http://localhost:3000/api/customers'
    })
        .then(res=> console.log(res))
        .catch(err=>console.log(err));
}