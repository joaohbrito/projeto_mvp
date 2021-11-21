const usuario = require('./usuario.routes');
const questao = require('./questao.routes');
const hardskill = require('./hardskill.routes');
const disciplina = require('./disciplina.routes');
const turma = require('./turma.routes');
const grupo = require('./grupo.routes');
const tarefa = require('./tarefa.routes');
const alunoHardskills = require('./aluno_hardskills.routes');
const alunoSoftskills = require('./aluno_softskills.routes');
const turmaHardskills = require('./turma_hardskills.routes');
const turmaCursos = require('./turma_cursos.routes');
const avaliativaHardskills = require('./avaliativa_hardskills.routes');
const avaliacao360Softskills = require('./avaliacao360_softskills.routes')


module.exports = app => {
    app.use('/api/usuario',usuario);
    app.use('/api/questao',questao);
    app.use('/api/hardskill',hardskill);
    app.use('/api/disciplina',disciplina);
    app.use('/api/turma',turma);
    app.use('/api/turma',grupo);
    app.use('/api/tarefa',tarefa);
    app.use('/api/aluno_hardskills',alunoHardskills);
    app.use('/api/aluno_softskills',alunoSoftskills);
    app.use('/api/turma_hardskills',turmaHardskills);
    app.use('/api/turma_cursos',turmaCursos);
    app.use('/api/avaliativa_hardskills',avaliativaHardskills);
    app.use('/api/avaliacao360_softskills',avaliacao360Softskills);

}


