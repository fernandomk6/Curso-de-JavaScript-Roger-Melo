function Student (name, email) {
  this.name = name
  this.email = email
}

Student.prototype.login = function login () {
  return `${this.name} fez login`
}

Student.prototype.comment = function comment () {
  return `${this.name} comentou`
}

function TeacherAssistant (name, email, scheduleWeekPosts) {
  Student.call(this, name, email)
  this.scheduleWeekPosts = scheduleWeekPosts
} 

TeacherAssistant.prototype = Object.create(Student.prototype)
TeacherAssistant.prototype.constructor = TeacherAssistant

TeacherAssistant.prototype.giveBadge = function giveBadge ({ name }) {
 return `${this.name} deu uma medalha para ${name}`
}

const fernando = new TeacherAssistant('Fernando', 'fernandomk6@gmail.com', false)

const pedro = new Student('Pedro', 'pedromk6@gmail.com')
const marreco = new Student('Pedro', 'pedromk6@gmail.com')

console.log(fernando.login === pedro.login)
console.log(marreco.login === pedro.login)

