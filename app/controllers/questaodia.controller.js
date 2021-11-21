const models = require('../db/models');

exports.index = async ()=>{
  const resultado = await models.questaodia.findAll();
  return resultado
}

exports.show = async (id)=>{
  const resultado = await models.questaodia.findByPk(id);
  return resultado
}

exports.store = async (questaodia)=>{
    const resultado = await models.questaodia.create(questaodia)
    return resultado
}

exports.update = async (questaodia,id)=>{
  const resultado = await models.questaodia.update(questaodia,{
    where: {id:id}
  })
  return resultado
    
}
exports.destroy = async (id)=>{
  const resultado = await models.questaodia.destroy({
    where: {id:id}
  })
  return resultado
}