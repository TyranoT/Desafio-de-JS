let c = 0
let res = document.getElementById('res')
function clique() {
    c++
    res.innerHTML = `Contado: ${c}`
}
function resetar() {
    c = 0
    res.innerHTML = `Contado: ${c}`
}