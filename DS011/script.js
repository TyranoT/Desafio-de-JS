function verificar() {
    let n1 = document.getElementById('n1')
    let n2 = document.getElementById('n2')
    let n3 = document.getElementById('n3')
    //Manipulação de Dados://
    let num1 = Number(n1.value)
    let num2 = Number(n2.value)
    let num3 = Number(n3.value)
    let media1 = num1 + num2 + num3
    let mediag = media1 / 3
    if (num1, num2, num3 <= 0) {
        window.alert('[ERRO] Notas Invalidas Tente Novamente!')
    } else if (mediag >= 7) {
        window.alert('Parabéns Você Passou de Ano!')
    } else {
        window.alert('Infelizmente você ficou em recuperação')
    }
}