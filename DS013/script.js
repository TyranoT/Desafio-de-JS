function verificar() {
    let n1 = document.getElementById('n1')
    let n2 = document.getElementById('n2')
    //Manipulação de Dados://
    let num1 = Number(n1.value)
    let num2 = Number(n2.value)
    let res = document.getElementById('res')
    if (num1 > num2) {
        res.innerHTML = `Entre os números ${num1} e ${num2}, o maior é ${num1}`
    } else {
        res.innerHTML = `Entre os números ${num1} e ${num2}, o maior é ${num2}`
    }
}