class Aluno {
  constructor (nome, curso, semestre) {
    this.nome = nome,
    this.curso = curso,
    this.semestre = semestre
  }

  
  get nomeAluno () {
    return this.nome
  }
  
  set nomeAluno (nomeAluno) {
    this.nome = nomeAluno
  }
  
}

class X extends Aluno {
  constructor(nome, curso, semestre) {
    super(nome, curso, semestre)
  }
}

const lucas = new X('', 'Engenharia', 5)
lucas.nomeAluno = 'Lucas'

console.log(lucas.nomeAluno)