module.exports = (()=>{
const questaodiaController = require("../controllers/questaodia.controller")
let router = require ("express").Router();

router.get("/",async(req,res)=>{
    const questaodia = await questaodiaController.index();
    res.json(questaodia)
})

router.get("/:id",async(req,res)=>{
    const questaodia = await questaodiaController.show(req.params.id);
    res.json(questaodia)
})

router.post("/",async(req,res)=>{
    const questaodia = await questaodiaController.store(req.body);
    res.json(questaodia)
})

router.put("/:id",async(req,res)=>{
    const questaodia = await questaodiaController.update(req.body, req.params.id);
    res.json(questaodia)

})

router.delete("/:id",async(req,res)=>{
    const questaodia = await questaodiaController.destroy(req.params.id);
    res.json(questaodia)
})

return router

})() 