function aleatorio() {
    let res = document.getElementById ('res')
    let gerar = Math.floor(Math.random()*100)+1
    res.innerHTML = gerar
}
function resetar() {
    let res = document.getElementById ('res')
    res.innerHTML = ''
}