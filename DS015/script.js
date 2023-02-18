function ativar() {
    let res = document.getElementById('res')
    let time = new Date()
    let dia = time.getDate()
    let mes = time.getMonth()
    let ano = time.getFullYear()
    let semana = time.getDay()
    let hora = time.getHours()
    let minutos = time.getMinutes()
    let segundos = time.getSeconds()
    res.innerHTML = 
        `
        Dia: <mark>${dia}</mark>
        <br>
        Mês: <mark>${mes}</mark>
        <br>
        Ano: <mark>${ano}</mark>
        <br>
        Dia da Semana: <mark>${semana}</mark>
        <br>
        Hora: <mark>${hora}</mark>
        <br>
        Minutos: <mark>${minutos}</mark>
        <br>
        segundos: <mark>${segundos}</mark>
        `    
}