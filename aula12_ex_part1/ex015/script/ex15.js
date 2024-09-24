function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `vc tem ${idade} anos`
    }
    var masculino = document.getElementById('masc').checked
    var feminino = document.getElementById('fem').checked
    var imgDiv = document.getElementById('imagem')

    imgDiv.innerHTML = '' // Limpa o conteúdo da div de imagens

    if (masculino) {
        imgDiv.innerHTML = "<img src='link homem.jpg' alt='Imagem masculino'>"
    } else if (feminino) {
        imgDiv.innerHTML = "<img src='link mulher.jpg' alt='Imagem feminino'>"
    }
    
    if (fano && (masculino || feminino)) {
        
    imgDiv.style.display = 'block'// mostra a imagem
    } else {
        res.innerHTML = 'Pfv preencha o formulario man'
    } 
    

}
