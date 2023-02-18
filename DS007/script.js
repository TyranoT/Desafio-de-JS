function media() {
    let n1 = document.getElementById('n1')
    let n2 = document.getElementById('n2')
    let n3 = document.getElementById('n3')
    let res = document.getElementById('res')
    //Manipulação de Dados//
    let num1 = Number(n1.value)
    let num2 = Number(n2.value)
    let num3 = Number(n3.value)
    //Calculo Seperado//
    let m1 = num1 + num2 + num3
    let m2 = m1 / 3
    //Mostrado na Div//
    res.innerHTML = `Sua Média Bimestral é de: ${m2}`
}