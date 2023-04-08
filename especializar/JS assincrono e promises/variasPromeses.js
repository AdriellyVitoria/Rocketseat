const { default: axios } = require("axios");

promise.all(
    [
        axios.get('https://api.github.com/users/AdriellyVitoria'),
        axios.get('https://api.github.com/users/AdriellyVitoria/repos')
    ])

.then(response => {
    console.log(responses[0].data,login)
    console.log(response[1].data.length)
})
.catch(err => console.log(err.message))