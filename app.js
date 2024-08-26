
let encriptadorTextarea = document.querySelector('.encriptador');
let botonEncriptar = document.querySelector('.boton__encriptar');
let botonDesencriptar = document.querySelector('.boton__desencriptar');
let resultadosDiv = document.querySelector('.resultados');

function encriptarTexto(texto) {
    let reglasEncriptacion = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    
    return texto.replace(/[eioua]/g, match => reglasEncriptacion[match]);
}

function desencriptarTexto(texto) {
    let reglasDesencriptacion = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    return texto.replace(/enter|imes|ai|ober|ufat/g, match => reglasDesencriptacion[match]);
}

function mostrarResultado(texto) {
    resultadosDiv.innerHTML = '';

    let resultadoParrafo = document.createElement('p');
    resultadoParrafo.textContent = texto;
    resultadosDiv.appendChild(resultadoParrafo);

    let botonCopiar = document.createElement('button');
    botonCopiar.textContent = 'Copiar';
    botonCopiar.classList.add('boton__copiar');
    resultadosDiv.appendChild(botonCopiar);

    botonCopiar.addEventListener('click', () => {
        navigator.clipboard.writeText(texto).then(() => {
        botonCopiar.textContent = 'Copiado ';
        });
    });
}

botonEncriptar.addEventListener('click', () => {
    let textoOriginal = encriptadorTextarea.value;
    let textoEncriptado = encriptarTexto(textoOriginal);
    mostrarResultado(textoEncriptado);
    encriptadorTextarea.value = '';
});

botonDesencriptar.addEventListener('click', () => {
    let textoEncriptado = encriptadorTextarea.value;
    let textoDesencriptado = desencriptarTexto(textoEncriptado);
    mostrarResultado(textoDesencriptado);
    encriptadorTextarea.value = '';
});