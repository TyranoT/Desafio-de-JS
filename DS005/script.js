function iniciar() {
    let nome = window.prompt('Qual seu nome?')
    let idade = window.prompt('Quantos anos você tem?')
    let res = document.getElementById('res')
    res.innerHTML = `Parabéns <strong>${nome}</strong> você sabe seu nome e sua idade que é <strong>${idade}</strong> anos!`
}