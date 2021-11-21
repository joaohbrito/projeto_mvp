const models = require('../db/models');


exports.store = async (turma,id)=>{
    
  const model = await models.turma.findOne({
    where: {id_usuario:id}, include:{association:'cursos'}
  })
  let refsCursos = [];
  for (let h in turma.cursos){
    let curso = turma.cursos[h];

    const [result] = await models.curso.findOrCreate({
      where: curso
  }) 
  refsCursos.push(result.id)
}

model.addCurso(refsCursos);

return true
}
exports.destroy = async (turma,id)=>{
    
  const model = await models.turma.findOne({
    where: {id_usuario:id}, include:{association:'Cursos'}
  })
  let refsCursos = [];
  for (let h in turma.Cursos){
    let hardskill = turma.Cursos[h];

    const result = await models.hardskill.findOne({
      where: hardskill
  }) 
  if (result){
    refsCursos.push(result.id)
  }
  refsCursos.push(result.id)
}

model.removeHardskill(refsCursos);

return true
}