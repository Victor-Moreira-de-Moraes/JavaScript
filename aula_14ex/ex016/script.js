 function contar() {
    let Inicio = document.getElementById('Inicio')
    let Fim = document.getElementById('Fim')
    let Passo = document.getElementById('Passo')
    let res = document.getElementById('res')
    
    if (Inicio.value.length == 0|| Fim.value.length == 0 || Passo.value.length == 0) //length significa comprimento, é quantas letras tem dentro
    {
       // window.alert('Erro, faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando... <br>' //br = break roll, quebra de linha

        let i = Number(Inicio.value) // Transformando todos os valores
        let f = Number(Fim.value)   //  digitados que estão como string  
        let p = Number(Passo.value)//   em valores numéricos.

        if (p <= 0 || p > f) {
            window.alert('Passo inválido! Considerando Passo como 1')
            p = 1
        }

        if (i < f) {
            //Contagem crescente
        for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F621}\u{1F595}`
    }// \u{} é a formatação unicode(colocar emoji) para JS
        
    } else { 
        //Contagem regressiva
        for (let c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{1F621}\u{1F595}`
        }// \u{} é a formatação unicode(colocar emoji) para JS
    }
        res.innerHTML += ' \u{1F60E}'
    }
 }