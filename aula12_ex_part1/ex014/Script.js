function updateClock() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('img');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    
    msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos} horas.`;

    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.jpg';
        document.body.style.backgroundColor = '#DBDB70';
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fototarde.jpg';
        document.body.style.backgroundColor = '#FF7F00';
    } else {
        img.src = 'fotonoite.jpg';
        document.body.style.backgroundColor = '#42426F';
    }
}

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);

// Chama a função para definir a hora inicial
updateClock();
