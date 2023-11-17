

window.onload.fetch("http://localhost/recipe/pizza").then(function (res) {return res.json();
}).then(function (data) {
    console.log(data)
})