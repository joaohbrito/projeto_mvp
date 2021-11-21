const {DataTypes} = require('sequelize');
const turma = require('./turma.model');
const name = require ('path').basename(__filename.replace(".model",""),'.js');
const sequelize = require('../index').getConnection();

const Grupo = sequelize.define(name, 
    {
        matricula: {
        type: DataTypes.STRING(10)
        }
    },
    {
        sequelize,
        tableName:name,
        timestamps:false
    
    }
    )
    Grupo.associate = (models)=>{
         Grupo.belongsTo(models.turma,{
            foreignKey:{
                name:'id_turma'
            },
            as: 'turmas'
        }),
        Grupo.associate = (models)=>{
            Grupo.belongsTo(models.avaliativa,{
               foreignKey:{
                   name:'id_avaliativa'
               },
               as: 'avaliativas'
           }),
        Grupo.belongsToMany(models.aluno,{
            through: 'aluno_grupo',
            timestamps: false,
            foreignKey: {
                name: 'id_aluno'
            },
            as:'alunos'
            
        })
        Grupo.belongsToMany(models.tarefa,{
             through: 'tarefa_grupo',
             timestamps: false,
             foreignKey: {
            name: 'id_tarefa'
        },
        as:'tarefas'
        
    })
        Grupo.belongsToMany(models.avaliacao360,{
            through: 'avaliacao360_grupo',
             timestamps: false,
            foreignKey: {
              name: 'id_avaliacao360'
    },
              as:'avaliacoes360'
    
})
            Grupo.belongsToMany(models.turma,{
                through: 'professor_turma',
                timestamps: false,
                foreignKey: {
                    name: 'id_professor'
                },
                as:'turmas'
            })

        }
    }
    module.exports = Grupo