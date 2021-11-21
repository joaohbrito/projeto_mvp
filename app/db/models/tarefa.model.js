const {DataTypes} = require('sequelize');
const name = require ('path').basename(__filename.replace(".model",""),'.js');

const sequelize = require('../index').getConnection();

const Tarefa = sequelize.define(name, 
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
},
    {
        sequelize,
        tableName:name
    
    }
    )
    Tarefa.associate = models =>{
        Tarefa.hasMany(models.grupo,{
            foreignKey: { 
                name: 'id_tarefa'
            },
            as:'grupo'
        })
    
        Tarefa.belongsTo(models.turma,{
            foreignKey:{
                name: 'id_turma'
            },
            as:'turma'
        })
    }
module.exports = Tarefa