function ativar() {
    let res = document.getElementById('res')
    let sistema = new Date()
    sistema.getTime()
    res.innerHTML = `O sistema avisa ${sistema}`
    res.style.color = 'red'
}