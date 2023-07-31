
let aluno1 = 'Luis'
let aluno2 = 'Alexandre'
let aluno3 = 'Allen'
let aluno4 = 'Rafael'

console.log(aluno1, aluno2);

let alunos = ['Luis', 'Alexandre', 'Allen', 'Rafael']

console.log(alunos[0],alunos[1]);
for(let aluno of alunos){
    console.log(aluno);
}

let professores = ['Adriana', 'Carlos']

let fiap = [['Luis', 'Alexandre', 'Allen', 'Rafael'], ['Adriana', 'Carlos']]

console.log(fiap[1][1]);

let carros = [
    {marca:'Honda',modelo:'Civic'},
    {marca:'Toyota',modelo:'Corolla'},
    {marca:'GM',modelo:'Cruize'}
]

let frutas = ['Maça', 'Banana', 'Uva', 'Pera']

frutas[4] = 'Melancia'

frutas.push('Kiwi')

frutas
frutas.sort()
frutas.sort().reverse()

frutas.unshift('Laranja')

frutas.shift()

frutas.splice(1,3,'Laranja')

console.log(frutas);

const cursos = [
    {nome:'HTML5',duracao:'3 meses'},
    {nome:'CSS3',duracao:'4 meses'},
    {nome:'JS6',duracao:'5 meses'}
]

console.log(cursos);

const nomeCursos = cursos.map(curso => curso.nome)

console.log(nomeCursos);

const progrCursos = cursos.map(curso => `O ${curso.nome} só dura ${curso.duracao}`)

for( let cr of progrCursos) console.log(cr);


