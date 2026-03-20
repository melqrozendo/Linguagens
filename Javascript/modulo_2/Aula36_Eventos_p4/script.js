/*
Evento: Keydown
-o evento é ativadoquando uma tecla do teclado é pressionada
-podemos tambem atrelar o evento 'keyup' para quando uma tecla volta a posição normal

Eventos:
keydown (evento de tecla pressionada)
keyup (evento de tecla soltada)

*/
//keydown - evento com callback e paramento de evento
document.addEventListener('keydown', function(event) {
    //exbir a key da tecla digitada
    console.log(event);

    //com isso podemos fazer:
    if(event.key === 'Enter'){
        console.log('Apertou Enter');
    }

});

//keyup
document.addEventListiner('keyup', function(event) {

    // console.log(e);
    if(event.key === 'Enter') {
        console.log('Soltou Enter');
    }
})