const { default: axios } = require("axios");

const res = axios.get('https://api.github.com/users/AdriellyVitoria')

console.log(res)
