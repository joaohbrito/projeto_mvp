const {DataTypes} = require('sequelize');
const name = require ('path').basename(__filename.replace(".model",""),'.js');
const sequelize = require('../index').getConnection();

const Disciplina = sequelize.define(name, 
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
}
)   
Disciplina.associate = models =>{
        Disciplina.belongsToMany(models.professor,{
            through: 'professor_disciplina',
            timestamps: false,
            foreignKey: {
                name: 'id_disciplina'
            },
            as:'professor'
        })
        Disciplina.hasMany(models.turma,{
            foreignKey: { 
                name: 'id_turma'
            },
            as:'turma'
        })
        Disciplina.belongsToMany(models.hardskill,{
            through: 'disciplina_hardskill',
            timestamps: false,
            foreignKey: {
                name: 'id_hardskill'
            },
            as:'hardskills'
        })
    }
    module.exports = Disciplina