fetch("http://localhost:3000/recipe/Pizza")
.then(function (res) {return res.json();
}).then(function (data) {

    const body = document.getElementsByClassName("col")[1];
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


const ingButton = document.getElementById("add-ingredient")
const instButton = document.getElementById("add-instruction")
const submitButton = document.getElementById("submit")

let ingredientList = []
let instructionList = []

ingButton.addEventListener("click", () => {
    const text = document.getElementById("ingredients-text").value
    ingredientList.push(text)
    console.log(ingredientList)
})

instButton.addEventListener("click", () => {
    const text = document.getElementById("instructions-text").value
    instructionList.push(text)
    console.log(instructionList)
})

submitButton.addEventListener("click" , () => {
    const name = document.getElementById("name-text").value;
    let fotos = document.getElementById("image-input").value;

    fetch("http://localhost:3000/recipe/", {
        method: 'POST',
        body: JSON.stringify({
            "name": name,
            "instructions": instructionList,
            "ingredients": ingredientList
        })
    }).then(function (res) {return res.json();
    }).then(function (data) {

        const body = document.getElementsByClassName("col")[1];
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

    
    fotos = fotos.split("h\\")
    const formData = new FormData()
    formData.append("images", fotos[1])


    

    let dataToSend = Object.fromEntries(formData)

    fetch("http://localhost:3000/images", {
        method: 'POST',
        body: formData

    }).then(function (res) {return res.json()
    }).then(function (data) {
        //console.log(data)
    })

    ingredientList = []
    instructionList = []


})
