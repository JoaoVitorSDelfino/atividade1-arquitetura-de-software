import Aluno from "./classes/aluno.js"
import Turma from "./classes/turma.js"
import TurmaPresencial from "./classes/turmaPresencial.js"

const aluno1 = new Aluno("aluno1 ", "login1", 123456)
const aluno2 = new Aluno("aluno2", "login2", 654321)

const turma = new Turma(12345, 10.0, aluno1)
const turmaPresencial = new TurmaPresencial(54321, 8.5, 55, aluno2)

console.log('\nAluno 1: ', aluno1)
console.log('Aluno 2: ', aluno2)

console.log('\nCódigo da turma: ', turma.codigo)
console.log('Nota: ', turma.nota)
console.log('Aprovado: ', turma.aprovado())

console.log('\nCódigo da turma presencial: ', turmaPresencial.codigo)
console.log('Nota: ', turmaPresencial.nota)
console.log('Frequência: ', turmaPresencial.frequencia)
console.log('Aprovado: ', turmaPresencial.aprovado())