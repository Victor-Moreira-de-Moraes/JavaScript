function verificar() { //função.
    var data = new Date() //data atual.
    var ano = data.getFullYear() //ano atual.
    var fano = document.getElementById('txtano') //ano digitado pelo usuário.
    var res = document.querySelector('div#res') //transforma "res" em variável.
    if (fano.value.lenght == 0 || Number(fano.value) > ano) { /* Para uma string vazia, lenght é 0 ou se o valor digitado pelo usuário(fano) transformado em number(Number) for maior que o ano atual. */
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') //existe a opção 0 e 1.
        var idade = ano - Number(fano.value) //Ano atual menos o ano digitado pelo usuário.
        var gênero = '' //string vazia
        var img = document.createElement('img')
        img.setAttribute('id','foto') //Igual criar no HTML a tag <img id = "foto">.
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'foto-menino.png')
                document.body.style.background='#FF665A'
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-masc.png')
                document.body.style.background='#705E78'
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-homem.png')
                document.body.style.background='#FFF587'
            } else {
                //Idoso
                img.setAttribute('src', 'foto-velho.png')
                document.body.style.background='#A3A1A8'
            }
        } else if (fsex[1].checked) {
            gênero = "Mulher"
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'foto-menina.png')
                document.body.style.background='#FF8C64'
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-fem.png')
                document.body.style.background='#A5AAA3'
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-mulher.png')
                document.body.style.background='#812F33'
            } else {
                //Idoso
                img.setAttribute('src', 'foto-velha.png')
                document.body.style.background='#FEA443'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)//adicionar imagem(img)
    }

}   