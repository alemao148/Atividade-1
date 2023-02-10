/***********************************************
 * Objetivo: Calcular a média dos alunos
 * Autor: Cauã Felipe
 * Data: 10/02/2023
 * Versão: 1.0
 ***********************************************/

const calculoDeMedia = function (
    nomeAluno,
    nomeProfessor,
    generoAluno,
    generoProfessor,
    nomeCurso,
    nomeDisciplina,
    primeiraNota, 
    segundaNota, 
    terceiraNota,
    quartaNota,
    notaFinal,
    aprovado1,
    reprovado1,
    aluno1,
    professor1
     ) {

    let aluno = nomeAluno;
    let professor = nomeProfessor;
    let sexoAluno = generoAluno;
    let sexoProfessor = generoProfessor;
    let curso = nomeCurso;
    let disciplina = nomeDisciplina;
    let nota1 = Number(primeiraNota);
    let nota2 = Number(segundaNota);
    let nota3 = Number(terceiraNota);
    let nota4 = Number(quartaNota);
    let mediaFinal = notaFinal;
    let status = true;

    switch(sexoAluno){

        case 'MASCULINO':
            aluno1 = 'O aluno';
            aprovado1 = 'Aprovado';
            reprovado1 = 'Reprovado';
            break;

        case 'FEMININO':
            aluno1 = 'A aluna';
            aprovado1 = 'Aprovada';
            reprovado1 = 'Reprovada';
            break;
    }

    switch(sexoProfessor){

        case 'MASCULINO':
            professor1 = 'Professor';
            break;
        
        case 'FEMININO':
            professor1 = 'Professora';
            break;
    }


    if (aluno == '' || professor == '' || sexoAluno == '' || sexoProfessor == '' || curso == '' 
        || disciplina == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
        status = false;
    }else if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0 ||
        nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100) {
        status = false;
    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        status = false;
    } else {
        let media = (nota1 + nota2 + nota3 + nota4) / 4;

        if ( media >= 70){
            console.log( aluno1 + ' foi ' + aprovado1 + ' na disciplina ' + disciplina 
            + '\nCurso: ' + curso + '\n' +professor1 + ': ' + professor + '\nNota do aluno: ' + nota1 + ',' + nota2 + ',' + nota3 + ',' + nota4 + '\nMédia final do exame: ' + media);
        }else if (media < 50){
            console.log( aluno1 + ' foi ' + reprovado1 + 'na disciplina ' + disciplina
            + '\nCurso: ' + curso + '\n' + professor1 + ': ' + professor + '\nNota do aluno: ' + nota1 + ',' + nota2 + ',' + nota3 + ',' + nota4 + '\nMédia final do exame:' + media)
        }
    }

}



