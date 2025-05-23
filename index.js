const axios = require('axios');
axios.get('https://api.github.com').then(res => console.log(res)).catch(err => console.error(err));