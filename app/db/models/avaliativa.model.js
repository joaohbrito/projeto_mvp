const {DataTypes} = require('sequelize');
const name = require ('path').basename(__filename.replace(".model",""),'.js');

const sequelize = require('../index').getConnection();

const Avaliativa = sequelize.define(name, 
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
    Avaliativa.associate = models =>{
        Avaliativa.belongsToMany(models.hardskill,{
            through: 'avaliativa_hardskill',
            timestamps: false,
            foreignKey: {
                name: 'id_hardskill'
            },
            as:'hardskills'
        })
        Avaliativa.belongsTo(models.turma,{
            foreignKey:{
                name: 'id_turma'
            },
            as:'turma'
        })
        Avaliativa.hasMany(models.avaliacao360,{
            foreignKey: { 
                name: 'id_avaliativa'
            },
            as:'avaliacao360'
        })
    }
module.exports = Avaliativa