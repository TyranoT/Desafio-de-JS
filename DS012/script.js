function verificar() {
    let n1 = document.getElementById('n1')
    //Manipulação de Dados://
    let num1 = Number(n1.value)
    let res = document.getElementById('res')
    if (num1 % 2 == 0) {
        res.innerHTML = 'Este Número é Par'
    } else { 
        res.innerHTML = 'Este Número é Impar'
    }
}