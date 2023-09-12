function validarCurso(){
    var cursos = {
        in: ['^(IN-)?\\d{3}$',"El código del curso debe tener 3 caracteres numéricos y puede comenzar con IN-. Por ej: IN-123 o 123."],
        pt: ['\\d{4}$',"El código del curso debe tener 4 caracteres numéricos. Por ej: 1234."],
        pr: ['^(PR-)?\\d{5}$',"El código del curso debe comenzar con PR- y tener 5 caracteres numéricos. Por ej: PR-12345 o 12345."],
    }

var codigoC = document.getElementById('codigo')
var niveles = document.getElementById('niveles').value

var validador = new RegExp(cursos[niveles][0])

if(validador.test(codigoC.value)) {
    codigoC.setCustomValidity("")
} else{
    codigoC.setCustomValidity(cursos[niveles][1])
}
}
window.onload = function(){
    document.getElementById('niveles').onchange = validarCurso
    document.getElementById('codigo').oninput = validarCurso
}