var tamanios = ['10px', '12px', '14px', '16px', '18px', '20px', '22px', '24px', '26px']

var inicio = 3

var caja = document.getElementById('cambiar_tam')

function agrandarTxt(){
    if(inicio<tamanios.length) {
    inicio++
}
    caja.style.fontSize = tamanios[inicio]
    
}

function achicarTxt(){
    if(inicio>0) {
    inicio--
    }
    caja.style.fontSize = tamanios[inicio]

}