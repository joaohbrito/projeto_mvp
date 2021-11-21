module.exports = (()=>{
const avaliativaHardskillsController = require("../controllers/avaliativa_hardskills.controller")

let router = require ("express").Router();

router.post("/:id",async(req,res)=>{
    const hardskill = await avaliativaHardskillsController.store(req.body,req.params.id);
    res.json(hardskill)
})

router.delete("/:id",async(req,res)=>{
    const hardskill = await avaliativaHardskillsController.destroy(req.body,req.params.id);
    res.json(hardskill)
})

return router

})() 