/***********************************************
 * Objetivo: Calcular a média dos alunos
 * Autor: Cauã Felipe
 * Data: 10/02/2023
 * Versão: 1.0
 ***********************************************/

var readline = require('readline');
var registro = require('./modulo/relatorioAlunos.js');
const { criarRelatorioExame } = require('./modulo/relatorioAlunos.js');

var entradaDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout

})

entradaDados.question('Digite o nome do aluno: ', function (nomeDoAluno) {
    let aluno = nomeDoAluno;
    entradaDados.question('Digite o nome do professor: ', function (nomeDoProfessor) {
        let professor = nomeDoProfessor;
        entradaDados.question('Qual gênero o aluno se identifica: \n\nMasculino\nFeminino\n\n', function (generoDoAluno) {
            let sexoAluno = generoDoAluno.toUpperCase();
            entradaDados.question('Qual gênero o professor se identifica: \n\nMasculino\nFeminino\n\n', function (generoDoProfessor) {
                let sexoProfessor = generoDoProfessor.toUpperCase();

                if ((sexoAluno != 'MASCULINO' && sexoAluno != 'FEMININO') || (sexoProfessor != 'MASCULINO' && sexoProfessor != 'FEMININO')) {
                    console.log('ERRO: O gênero apenas deve ser ou feminino ou masculino.')
                    entradaDados.close();
                } else {
                    entradaDados.question('Digite o nome do Curso: ', function (nomeDoCurso) {
                        let curso = nomeDoCurso;
                        entradaDados.question('Digite o nome da Disciplina: ', function (nomeDaDisciplina) {
                            let disciplina = nomeDaDisciplina;
                            entradaDados.question('Qual a primeira nota do aluno?: ', function (primeiraNota) {
                                let nota1 = primeiraNota.replace(',', '.');
                                entradaDados.question('Qual a segunda nota do aluno?: ', function (segundaNota) {
                                    let nota2 = segundaNota.replace(',', '.');
                                    entradaDados.question('Qual a terceira nota do aluno?: ', function (terceiraNota) {
                                        let nota3 = terceiraNota.replace(',', '.');
                                        entradaDados.question('Qual a quarta nota do aluno?: ', function (quartaNota) {
                                            let nota4 = quartaNota.replace(',', '.');

                                            if (aluno == '' || professor == '' || sexoAluno == '' || sexoProfessor == '' || curso == '' ||
                                                disciplina == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
                                                console.log('ERRO: Nenhum dos valores pode estar vazio!');
                                                entradaDados.close()
                                            } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
                                                console.log('ERRO: As notas devem ser apenas números');
                                                entradaDados.close()
                                            } else if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0 || nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100) {
                                                console.log('ERRO: As notas não devem ser menor que 0 ou maior que 100');
                                                entradaDados.close()
                                            } else {
                                                let resultado = registro.criarRelatorio(aluno, professor, sexoAluno, sexoProfessor, curso,
                                                    disciplina, nota1, nota2, nota3, nota4)

                                                if (resultado >= 50 && resultado < 70) {
                                                    entradaDados.question('O aluno entrou em exame, digite a nota do exame: ', function (notaDoExame) {
                                                        let exame = notaDoExame.replace(',', '.');

                                                        if (isNaN(exame)) {
                                                            console.log('ERRO: A nota deve ser um número');
                                                            entradaDados.close()
                                                        } else if (exame < 0 || exame > 100) {
                                                            console.log('ERRO: A nota não deve ser menor que 0 ou maior que 100');
                                                            entradaDados.close()
                                                        } else {
                                                            let resultadoExame = registro.criarRelatorioExame(aluno, professor, sexoAluno, sexoProfessor, curso,
                                                                disciplina, nota1, nota2, nota3, nota4, exame, resultado);

                                                            if (resultadoExame === false) {
                                                                entradaDados.close()
                                                            } else {
                                                                entradaDados.close()
                                                            }
                                                        }

                                                    })
                                                } else {
                                                    if (resultado === false) {
                                                        entradaDados.close()
                                                    } else {
                                                        entradaDados.close()
                                                    }
                                                }
                                            }

                                        })
                                    })
                                })
                            })
                        })
                    })
                }
            })
        })
    })
})