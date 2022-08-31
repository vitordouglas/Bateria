
document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;


    if (song !== '') {
        let songArray = song.split('');

        payComposition(songArray);
    }
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if (keyElement) {
        keyElement.classList.add('active');

        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300);
    }
}

function payComposition(songArray) {
    let wait = 0;


    for (let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;
    }

}

function carregar() {
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()

    if(hora >= 5 && hora < 12){
        document.querySelector('.img').innerHTML = `<strong>Bom Dia</strong> Agora são ${hora} horas e ${minutos} minutos`;
        document.body.style.background = '#D2691E';
        document.querySelector('.h1').innerHTML = 'Bateria da Manhã';
    }else if (hora >= 12 && hora <= 18) {
        document.body.style.background = '#556B2F';
        document.querySelector('.img').innerHTML = `<strong>Boa Tarde</strong> Agora são ${hora} horas e ${minutos} minutos`;
        document.querySelector('.h1').innerHTML = 'Bateria da Tarde';
    }else{
        document.querySelector('.img').innerHTML = `<strong>Boa Noite</strong> Agora são ${hora} horas e ${minutos} minutos e ${segundos} segundos`;
        document.body.style.background = '#006400';
        document.querySelector('.h1').innerHTML = 'Bateria da Noite';
        document.querySelector('.img').style.color = '#FFD700';
    }
}
setInterval(() => {
    carregar();
}, 1000);




