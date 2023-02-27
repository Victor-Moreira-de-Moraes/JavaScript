var agora = new Date()
var hora = agora.getHours()
console.log(`agora são ${hora} horas.`)
if(hora < 5) {
    console.log('Vai dormir filho da puta!')
} else if(hora < 12) {
    console.log('Bom dia!')
} else if(hora <= 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite!')
}