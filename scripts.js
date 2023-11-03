//valor del ticket
const ticket = 200;

//descuentos

let descEstudiante = 0.80;
let descTrainee = 0.50;
let descJunior = 0.15;

//obtenemos los elementos

const cantidad = document.getElementById('cantidad')

const categoria = document.getElementById('categoria')

const totalAPagar = document.getElementById('totalAPagar')

const btnResumen = document.getElementById('resumen')

function calcularPago() {

    let total = cantidad.value * ticket;
    switch (categoria.value) {
        case "estudiante":
            total = total - (total * descEstudiante);
            break;
        case "trainee":
            total = total - (total * desctrainee);
            break;
        case "junior":
            total = total - (total * descjunior);
            break;

       
    }

    totalAPagar.textContent = `Total a Pagar: $ ${total}`;
}
btnResumen.addEventListener('click', (evento) => {
    evento.preventDefault()//impide que el formulario refresque la pagina
    calcularPago()
});