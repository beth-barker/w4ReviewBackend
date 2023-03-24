
let express = require(`express`)
let cors = require(`cors`)

const app = express()

app.use(express.json())
app.use(cors())


const {getDinos} = require(`./controller`)

app.get(`/dinos`, getDinos)





app.listen(4040, () => console.log(`Hola from 4040!`))
