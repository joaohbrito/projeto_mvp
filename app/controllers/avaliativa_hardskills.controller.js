const models = require('../db/models');


exports.store = async (avaliativa,id)=>{
    
  const model = await models.avaliativa.findOne({
    where: {id_usuario:id}, include:{association:'hardskills'}
  })
  let refsHardSkills = [];
  for (let h in avaliativa.hardskills){
    let hardskill = avaliativa.hardskills[h];

    const [result] = await models.hardskill.findOrCreate({
      where: hardskill
  }) 
  refsHardSkills.push(result.id)
}

model.addHardskill(refsHardSkills);

return true
}
exports.destroy = async (avaliativa,id)=>{
    
  const model = await models.avaliativa.findOne({
    where: {id_usuario:id}, include:{association:'hardskills'}
  })
  let refsHardSkills = [];
  for (let h in avaliativa.hardskills){
    let hardskill = avaliativa.hardskills[h];

    const result = await models.hardskill.findOne({
      where: hardskill
  }) 
  if (result){
    refsHardSkills.push(result.id)
  }
  refsHardSkills.push(result.id)
}

model.removeHardskill(refsHardSkills);

return true
}