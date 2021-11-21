const models = require('../db/models');

exports.index = async ()=>{
  const resultado = await models.avaliativa.findAll();
  return resultado
}

exports.show = async (id)=>{
  const resultado = await models.avaliativa.findByPk(id);
  return resultado
}

exports.store = async (avaliativa)=>{
    const resultado = await models.avaliativa.create(avaliativa)
    return resultado
}

exports.update = async (avaliativa,id)=>{
  const resultado = await models.avaliativa.update(avaliativa,{
    where: {id:id}
  })
  return resultado
    
}
exports.destroy = async (id)=>{
  const resultado = await models.avaliativa.destroy({
    where: {id:id}
  })
  return resultado
}