const {DataTypes} = require('sequelize');
const name = require ('path').basename(__filename.replace(".model",""),'.js');
const sequelize = require('../index').getConnection();

const Avaliacao360 = sequelize.define(name, 
    {
        descricao:{
        type:DataTypes.STRING(50)
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'criado_em'
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'atualizado_em'
    }
})
    Avaliacao360.belongsTo(models.aluno,{
    foreignKey:{
        name: 'id_aluno'
    },
    as:'alunos'
    })
    Avaliacao360.belongsTo(models.avaliativa,{
        foreignKey:{
            name: 'id_avaliativa'
        },
        as:'avaliativas'
        })
        
    module.exports = Avaliacao360