const present = new Date()
const presentTimestamp = present.getTime()

const past = new Date('May 1 2020 7:47:00')
const pastTimestamp = past.getTime()

const difference = presentTimestamp - pastTimestamp

const differenceSeconds = Math.round(difference / 1000)
const differenceMinutes = Math.round(differenceSeconds / 60)
const differenceHours = Math.round(differenceMinutes / 60)
const differenceDays = Math.round(differenceHours / 24)
const differenceMonth = Math.round(differenceDays / 30)
const differenceYears = Math.round(differenceMonth / 12)


const timestamp = 1236548759585

const randomDate = new Date(timestamp)

console.log(randomDate)



