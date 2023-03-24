
console.log("It a liopleurodon, Charlie!")

let baseURL = `http://localhost:4040`

//Interactive JS
// Step 1: Grab html elements
// Step 2: Write function
// Step 3: Combine iwth event listeners

let dinoBtn = document.querySelector(`#getDino`)
let dinoDiv = document.querySelector(`#dinoDisplay`)


const getAllDinos = () => {
    axios.get(`${baseURL}/dinos`)
    .then((res) => {
        console.log(res.data)

        for(let i = 0; i < res.data.length; i++){
            let newSpan = document.createElement('p')
            newSpan.textContent = `${i + 1}. ${res.data[i]}`
            dinoDiv.appendChild(newSpan)
        }
    })
    .catch ((err) => {
        console.log(err)
    })
}



dinoBtn.addEventListener(`click`, getAllDinos)