function grabar() {
    var boton = document.querySelector('#grabar')
    boton.addEventListener('click', nuevoCurso)
    mostrarCurso()
}

function nuevoCurso() {
    var clave = document.querySelector('#clave').value
    var niveles = document.querySelector('#niveles').value
    var resumen = document.querySelector('#resumen').value
    var fecha = document.querySelector('#fecha').value
    var valores = [niveles, resumen, fecha]

    localStorage.setItem(clave, valores)
    alert("Curso Guardado")
    location.reload()
    
}

function mostrarCurso() {
    var caja = document.querySelector('#mostrarDatos')
    for (var i=0; i<localStorage.length; i++) {
        var id = localStorage.key(i)
        var valor = localStorage.getItem(id)
        caja.innerHTML += '<p>Nro de curso' +id+ '-' +valor+ '</p>'
    }
}
window.addEventListener('load', grabar)