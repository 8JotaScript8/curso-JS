function Contar() {
    var inicio = document.getElementById('inicio')
    var final = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando...<br>'
    }

    var i = Number(inicio.value)
    var f = Number(final.value)
    var p = Number(passo.value)
    if (p <= 0) {
        alert('Passo ínvalido! Considerando Passo 1')
        p = 1
    }
    if (i < f) {
        //contagem crescente
        for (var c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}` //Emoji de seta para direita
        }
        } else {
            //contagem regressiva
            for (var c = i; c >= f; c -=p)
            res.innerHTML += `${c} \u{1F449}` //Emoji de seta para direita  

        }
        res.innerHTML += `\u{1F3C1}` // Emoji de bandeira de chegada

    }