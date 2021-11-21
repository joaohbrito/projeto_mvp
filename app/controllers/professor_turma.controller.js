const models = require('../db/models');


exports.store = async (professor,id)=>{
    
  const model = await models.professor.findOne({
    where: {id_usuario:id}, include:{association:'turmas'}
  })
  let refsturmas = [];
  for (let h in professor.turmas){
    let turma = professor.turmas[h];

    const [result] = await models.turma.findOrCreate({
      where: turma
  }) 
  refsturmas.push(result.id)
}

model.addturma(refsturmas);

return true
}
exports.destroy = async (professor,id)=>{
    
  const model = await models.professor.findOne({
    where: {id_usuario:id}, include:{association:'turmas'}
  })
  let refsturmas = [];
  for (let h in professor.turmas){
    let turma = professor.turmas[h];

    const result = await models.turma.findOne({
      where: turma
  }) 
  if (result){
    refsturmas.push(result.id)
  }
  refsturmas.push(result.id)
}

model.removeturma(refsturmas);

return true
}