

let dinoArray = [`Stegosaurus`, `Shark Tooth`, `T-rex`, `Longneck`, `Ducky`]

module.exports = {
    getDinos: (req, res) => {
        res.status(200).send(dinoArray)
    }
}