/***********************************************
 * Objetivo: Calcular a média dos alunos
 * Autor: Cauã Felipe
 * Data: 10/02/2023
 * Versão: 1.0
 ***********************************************/

var status = true;

const generoAluno = function (alunoSexo) {
    let palavraAluno = alunoSexo;

    switch (alunoSexo) {
        case 'MASCULINO':
            palavraAluno = 'O aluno '
            break;

        case 'FEMININO':
            palavraAluno = 'A aluna '
            break;
    }
    return palavraAluno;
}

const generoProfessor = function (professorSexo) {
    let palavraProfessor = professorSexo;

    switch (professorSexo) {
        case 'MASCULINO':
            palavraProfessor = '\nProfessor: '
            break;

        case 'FEMININO':
            palavraProfessor = '\nProfessora: '
            break;
    }
    return palavraProfessor;
}

const criarRelatorio = function (
    nomeDoAluno,
    nomeDoProfessor,
    generoDoAluno,
    generoDoProfessor,
    nomeDoCurso,
    nomeDaDisciplina,
    primeiraNota,
    segundaNota,
    terceiraNota,
    quartaNota) {

    let aluno = nomeDoAluno; let professor = nomeDoProfessor; let sexoAluno = generoDoAluno; let sexoProfessor = generoDoProfessor;
    let curso = nomeDoCurso; let disciplina = nomeDaDisciplina; let nota1 = Number(primeiraNota); let nota2 = Number(segundaNota);
    let nota3 = Number(terceiraNota); let nota4 = Number(quartaNota); var status = true;

    if (aluno === '' || professor === '' || sexoAluno === '' || sexoProfessor === '' || curso === '' || disciplina === '' || nota1 === '' ||
        nota2 === '' || nota3 === '' || nota4 === '') {
        status = false;
    } else if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0 ||
        nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100) {
        status = false;
    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        status = false;
    } else {
        let media = (nota1 + nota2 + nota3 + nota4) / 4;

        if (media >= 70) {
            console.log('\n' + generoAluno(sexoAluno) + aluno + ' foi aprovado na disciplina de ' + disciplina + '\nCurso: ' + curso +
                generoProfessor(sexoProfessor) + professor + '\nNotas do Aluno: ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + '\nMédia Final: ' + media)
        } else if (media < 50) {
            console.log('\n' + generoAluno(sexoAluno) + aluno + ' foi reprovado na disciplina de ' + disciplina + '\nCurso: ' + curso +
                generoProfessor(sexoProfessor) + professor + '\nNotas do Aluno: ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + '\nMédia Final: ' + media)
        } else {
            return media;
        }
    }
    return status;
}

const criarRelatorioExame = function (nomeDoAluno, nomeDoProfessor, generoDoAluno, generoDoProfessor, nomeDoCurso, nomeDaDisciplina, 
    primeiraNota, segundaNota, terceiraNota, quartaNota, notaExame, media) {
    
    let aluno = nomeDoAluno; let professor = nomeDoProfessor; let sexoAluno = generoDoAluno; let sexoProfessor = generoDoProfessor;
    let curso = nomeDoCurso; let disciplina = nomeDaDisciplina; let nota1 = Number(primeiraNota); let nota2 = Number(segundaNota);
    let nota3 = Number(terceiraNota); let nota4 = Number(quartaNota); let notaMedia = Number(media); let exame = Number(notaExame);
    let mediaExame = (notaMedia + exame) / 2

    if (mediaExame >= 60) {
        console.log('\n' + generoAluno(sexoAluno) + aluno + ' foi aprovado na disciplina de ' + disciplina + '\nCurso: ' + curso +
            generoProfessor(sexoProfessor) + professor + '\nNotas do Aluno: ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + ', ' + exame + '\nMédia Final: ' + media +
            '\nMédia final do Exame: ' + mediaExame)
    } else if (mediaExame < 60) {
        console.log('\n' + generoAluno(sexoAluno) + aluno + ' foi reprovado na disciplina de ' + disciplina + '\nCurso: ' + curso +
            generoProfessor(sexoProfessor) + professor + '\nNotas do Aluno: ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + ', ' + exame + '\nMédia Final: ' + media +
            '\nMédia final do Exame: ' + mediaExame)
    }
    return status;
}


module.exports = {
    criarRelatorio,
    criarRelatorioExame
}