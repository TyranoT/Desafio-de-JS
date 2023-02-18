function calc() {
    let n1 = document.getElementById('n1')
    let res = document.getElementById('res')
    //Manipulação de Dados//
    let num1 = Number(n1.value)
    res.innerHTML = 
        `Valor: ${num1}
         <br>
         Somados: ${num1} + ${num1} = ${num1 + num1}
         <br>
         Subtraido: ${num1} - ${num1} = ${num1 - num1}
         <br>
         Multiplicado: ${num1} x ${num1} = ${num1 * num1}
         <br>
         Dividido: ${num1} / ${num1} = ${num1 / num1}
         <br>
         Resto da Divisão: ${num1} % ${num1} = ${num1 % num1}
         <br>
         Elevado: ${num1} ^ ${num1} = ${num1 ** num1}
         <br>
         Raiz Quadrada: √${num1} = ${Math.sqrt(num1)}
         <br>
         Raiz Cubica: √${num1} = ${Math.cbrt(num1)}
        `
}