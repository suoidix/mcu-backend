const express = require('express');
const router = express.Router();

const { 
    getAllCharacters,
    createOneCharacter,
    getCharacterByName,
    updateCharacter,
    deleteCharacter
} = require("../controllers/McuController");

// localhost:3001/api/allCharacters
router.get("/allCharacters", getAllCharacters)

// localhost:3001/api/createOneCharacter
router.post("/createOneCharacter", createOneCharacter)

// localhost:3001/api/getCharacterByName/:name
router.get("/getCharacterByName/:name", getCharacterByName)

// localhost:3001/api/updateCharacter/:id
router.put("/updateCharacter/:id", updateCharacter)

// localhost:3001/api/deleteCharacter/:id
router.delete("/deleteCharacter/:id", deleteCharacter)


module.exports = router;