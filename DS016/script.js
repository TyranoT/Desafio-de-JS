function calc() {
    let nas = document.getElementById('nas')
    let nasc = Number(nas.value)
    let time = new Date()
    let agora = time.getFullYear()
    let res = document.getElementById('res')
    if (nasc < agora) {
        res.innerHTML = `Você tem aproximadamente ${agora - nasc} anos!`
    } else {
        window.alert('[ERRO] Parece que você é do futuro, tente o mesmo site no futuro!')
    }
}