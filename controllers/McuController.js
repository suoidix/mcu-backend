const Mcu = require("../models/McuModel")

async function getAllCharacters(req, res) {
    try {
        let result = await Mcu.find({})

        res.json({
            message: "success",
            payload: result
        })
    } catch (error) {
        let errorObj = {
            message: "getAllCharacters failure",
            payload: error
        }

        res.json(errorObj)
        console.log(errorObj)
    }
}

async function createOneCharacter(req, res) {
    try {
        let newCharacter = req.body

        await Mcu.create(newCharacter)

        res.json({
            message: "success",
            payload: newCharacter
        }) 
    } catch (error) {
            let errorObj = {
                message: "create one Mcu failure",
                payload: error
            }
    
            res.json(errorObj)
            console.log(errorObj)
        }
    }


async function getCharacterByName(req, res) {
    try {
        let foundCharacter = await Mcu.findOne({ name: req.params.name })

        res.json({
            message: "success",
            payload: foundCharacter
        }) 
    } catch (error) {
            let errorObj = {
                message: "getCharacterByName failure",
                payload: error
            }
    
            res.json(errorObj)
            console.log(errorObj)
        }
}

async function updateCharacter(req, res) {
    try {
        let targetCharacter = await Mcu.findOne({ _id: req.params.id })

        let updatedCharacter = {
            _Id: targetCharacter._id,
            name: targetCharacter.name,
            debutFilm: req.body.debutFilm ? req.body.debutFilm : targetCharacter.debutFilm,
            debutYear: req.body.debutYear ? req.body.debutYear : targetCharacter.debutYear
        }

        await Mcu.updateOne(
            { _id: req.params.id },
            { $set: updatedCharacter },
            { upsert: true}

        )

        res.json({
            message: "success",
            payload: updatedCharacter
        }) 
    } catch (error) {
            let errorObj = {
                message: "updateCharacter failure",
                payload: error
            }
    
            res.json(errorObj)
            console.log(errorObj)
        }
}

async function deleteCharacter(req, res) {
    try {
        let targetCharacter = req.params.id

        let deletedCharacter = await Mcu.deleteOne({_id: targetCharacter})

        res.json({
            message: 'success',
            payload: deletedCharacter
        })
        
    } catch (error) {
            let errorObj = {
                message: "deleteCharacter failure",
                payload: error
            }
    
            res.json(errorObj)
            console.log(errorObj)
        }
}

module.exports = {
    getAllCharacters,
    createOneCharacter,
    getCharacterByName,
    updateCharacter,
    deleteCharacter
}