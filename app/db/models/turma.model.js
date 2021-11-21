const {DataTypes} = require('sequelize');
const name = require ('path').basename(__filename.replace(".model",""),'.js');
const sequelize = require('../index').getConnection();

const Turma = sequelize.define(name, 
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
Turma.associate = models =>{
        Turma.belongsToMany(models.professor,{
            through: 'professor_turma',
            timestamps: false,
            foreignKey: {
                name: 'id_turma'
            },
            as:'professores'
        })
        Turma.belongsToMany(models.aluno,{
            through: 'aluno_turma',
            timestamps: false,
            foreignKey: {
                name: 'id_turma'
            },
            as:'alunos'
        })
        Turma.belongsTo(models.disciplina,{
            foreignKey:{
                name: 'id_turma'
            },
            as:'disciplinas'
        })
        Turma.belongsToMany(models.hardkill,{
            through: 'turma_hardskill',
            timestamps: false,
            foreignKey: {
                name: 'id_hardskill'
            },
            as:'hardskills'
        })
        Turma.hasMany(models.avaliativa,{
            foreignKey: { 
                name: 'id_turma'
            },
            as:'avaliativas'
        })
    }
    module.exports = Turma