const present = new Date()

console.log(present);

console.log('getFullYear', present.getFullYear(), 'ano')
console.log('getMonth', present.getMonth(), 'mês, zero based')
console.log('getDate', present.getDate(), 'dia do mês')
console.log('getDay', present.getDay(), 'dia da semana, sendo domingo 0')
console.log('getHours', present.getHours(), 'horas')
console.log('getMinutes', present.getMinutes(), 'minutos')
console.log('getSeconds', present.getSeconds(), 'segundos')

console.log('timestamp', present.getTime(), 'milisegundos passados desde 01/01/1970 até o presente') 

console.log('toDateString', present.toDateString())
// toDateString Sun Oct 16 2022

console.log('toTimeString', present.toTimeString())
// toTimeString 13:14:02 GMT-0300 (Horário Padrão de Brasília)

console.log('toLocaleString', present.toLocaleString())
// toLocaleString 16/10/2022 13:15:24

