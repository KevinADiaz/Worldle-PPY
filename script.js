let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH']
let intentos = 6
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    const BOTON = document.getElementById("guess-button");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}
function leerintento() {
    const intento= document.getElementById("guess-input").value
    const valor = intento.toUpperCase()
    return valor
}
function intentar() {
    const INTENTO = leerintento()
    if (INTENTO === palabra){
        terminar("<h1>GANASTE!😀</h1>")
        return
    }
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra) {
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]=== palabra[i]) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#79B851' ;
        } else if (palabra.includes(INTENTO[i])) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#F3C237';
        } else {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#A4AEC4';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
    intentos --
    if (intentos===0) {
        terminar("<h1>PERDISTE!😖</h1>")
    }
}
document.getElementById("guess-button").addEventListener('click',()=>{
    let INTENTOlongitud = leerintento().length
    if (INTENTOlongitud === 5){
        intentar()
    }
    else{alert('la palabra debe tener 5 letras')}
})
