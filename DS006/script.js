function soma() {
    let n1 = document.getElementById('n1')
    let n2 = document.getElementById('n2')
    let res = document.getElementById('res')
    //Manipulação de Dados//
    let num1 = Number(n1.value)
    let num2 = Number(n2.value)
    res.innerHTML = `Somando ${num1} + ${num2} resulta em ${num1 + num2}`
}