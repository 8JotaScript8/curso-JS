function Tabuada() {
    let num = document.getElementById('numero')
    let tab = document.getElementById('selectab')

    if (num.value.length == 0) {
        alert('[ERRO] Digite um valor')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c<=10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }


        
    }
    
    
}