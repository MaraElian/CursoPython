function dibujo1(){
var elemento1 = document.querySelector('#lienzo1')
var forma1 = elemento1.getContext('2d')

forma1.beginPath()
forma1.moveTo(0, 20)
forma1.lineTo(5, 580)
forma1.lineTo(600, 20)
forma1.closePath()
forma1.fillStyle = '#b8b894'
forma1.fill()
}
window.addEventListener('load', dibujo1)

function dibujo2(){
var elemento2 = document.querySelector('#lienzo2')
var forma2 = elemento2.getContext('2d')

forma2.beginPath()
forma2.moveTo(0, 20)
forma2.lineTo(5, 580)
forma2.lineTo(600, 20)
forma2.closePath()
forma2.fillStyle = '#b8b894'
forma2.fill()
}
window.addEventListener('load', dibujo2)