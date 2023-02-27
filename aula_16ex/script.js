function adicionar() {
    let num = document.getElementById('number')
    let select = document.getElementById('select')

    if(num.value.length == 0 || num > 100 || num < 1) {
        window.alert('Valor inválido ou já encontrado na lista.')
    } else {
        let n = Number(num.value)
        
    }
}