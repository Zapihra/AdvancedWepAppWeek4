



fetch("http://localhost:3000/recipe/Lasagna").then(function (res) {return res.json();
}).then(function (data) {
    const body = document.getElementById("body");
    const p = document.createElement("p")
    p.textContent = data
    body.appendChild(p)
})

