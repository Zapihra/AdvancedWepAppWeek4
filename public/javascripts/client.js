



fetch("http://localhost:3000/recipe/Pizza")
.then(function (res) {return res.json();
}).then(function (data) {
    console.log(data)
    const body = document.getElementById("body");
    const p1 = document.createElement("p")
    const p2 = document.createElement("p")
    const p3 = document.createElement("p")
    p1.textContent = data.name
    p2.textContent = data.ingredients
    p3.textContent = data.instructions

    body.appendChild(p1)
    body.appendChild(p2)
    body.appendChild(p3)
})

