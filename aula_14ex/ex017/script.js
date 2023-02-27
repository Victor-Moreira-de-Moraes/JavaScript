function Gerar() {
    let num = document.getElementById('Número')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!') 
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //Antes de começar a mostrar a tabuada, eu limpo a área de tabuada
        while (c <= 10) {
            let item = document.createElement('option') //Mesma coisa que <option value="v1">Valor1</option> no HTML
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            item.value = `tab${c}`
            c++
       }
    }
}      