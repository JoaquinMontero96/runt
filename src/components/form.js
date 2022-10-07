const formularioCalcula = document.getElementById('formCalcula');
const sexo = document.getElementById('sexo');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const edad = document.getElementById('edad');

formularioCalcula.onsubmit = (e) => {
    e.preventDefault();

    const tmb = Math.round(calcularTmb(sexo.value, peso.value, altura.value, edad.value));
    const tasa = document.getElementById('tmb');
    tasa.innerHTML = `Tu tasa metabólica basal es <span>${tmb}</span> kcal`;
}

const calcularTmb = (sexo, peso, altura, edad) => {
    switch(sexo){
        case 'M':
            return (10*peso + 6.25*altura - 5*edad + 5);
        case 'F':
            return (10*peso + 6.25*altura - 5*edad - 161);
    }
}