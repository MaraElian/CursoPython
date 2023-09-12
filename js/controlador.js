var video_control = document.querySelector('#artesaravideo')

var btn_rep = document.querySelector ('#repr')

function reproducir(){
    if(video_control.paused) {
        video_control.play()
        btn_rep.innerHTML = '<img src="iconos/icon_pause.svg">'
    } else {
         video_control.pause()
         btn_rep.innerHTML = '<img src="iconos/icon_play.svg">'
    }
}

function frenar(){
    video_control.pause()
    video_control.currentTime=0
    btn_rep.innerHTML = '<img src="iconos/icon_play.svg">'
}

function saltar(fotograma){
    video_control.currentTime+=fotograma
}