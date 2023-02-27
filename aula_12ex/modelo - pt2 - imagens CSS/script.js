function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var minuto = data.getMinutes()

    var hora = 19
    msg.innerHTML = `Agora são ${hora}:${minuto}`
    
    if(hora > 0 && hora < 12) {
        //Bom Dia!
        imagem.src = 'imagem-manha.jpg'
        document.body.style.background = '#ffd86f'
    } else if(hora > 12 && hora < 18) {
        //Boa Tarde!
        imagem.src = 'imagem-tarde.jpg'
        document.body.style.background = '#c7836e'
    } else {
        //Boa noite!
        imagem.src = 'imagem-noite.jpg'
        document.body.style.background = '#2b3848' 
    }
}
