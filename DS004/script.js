function clicar() {
    let resultado = document.getElementById('res')
    let pergunta = window.prompt('Qual seu nome?')
    resultado.innerHTML = `Parabéns ${pergunta}, você sabe mesmo seu nome! Uau!`
}