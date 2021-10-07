const axios = require('axios');

test('Test do GET', () => {
    axios({
        method: 'get',
        url: 'http://192.168.0.102:3000/fornecedores',
        responseType: 'stream'
    })
        .then(response => response.json())
        .then(fornecedores => console.warn(fornecedores))
})
