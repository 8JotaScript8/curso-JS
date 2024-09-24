let num = document.getElementById('txtn')
let tabela = document.getElementById('selectdados')
let res = document.getElementById('res')
let valores = []

function ISnumeric(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
        
 }

function INlista(n , l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}


function Adicionar() {

    if (ISnumeric(num.value) && !INlista(num.value, valores)) {
        valores.push(num.value)

        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi registrado`
        tabela.appendChild(item)
        res.innerHTML = ''

    }else{
        alert('Valor invalido ou ja registrado. Tente novamente.')
    }
    num.value = ''
    num.focus()
    
}
    
function Analisar() {
    if(valores.length == 0) {
        alert('Não há valores registrados')
    } else {
        let tot = valores.length
        let maior = Math.max(...valores)
        let menor = Math.min(...valores)
        let soma = 0
        

        for(let c in valores) {
            soma += Number(valores[c])
        }
        let media = soma / valores.length
        
        res.innerHTML = ''
        res.innerHTML += `<p>Foram adicionados ${tot} números</p>`
        res.innerHTML += `<p>O maior número resgistrado é o ${maior}</p>`
        res.innerHTML += `<p>O menor número resgistrado é o ${menor}</p>`
        res.innerHTML += `<p>A soma dos números registrados é ${soma}</p>`
        res.innerHTML += `A media dos valores registrados é ${media}`
    }  
        

}
