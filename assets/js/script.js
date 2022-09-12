const precio = 29800;

let cantidad = document.querySelector('#cantidad');
let color = document.querySelector('#color');
let button_calcular = document.querySelector('#calculo');
let total = document.querySelector('#total');
let cantidad_final = document.querySelector('#cantidad_final');
let color_final = document.querySelector('#color_final');

button_calcular.addEventListener('click', function() {
    let valor_final = cantidad.value * precio;
    total.innerHTML = valor_final.toString().replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ".");
    cantidad_final.innerHTML = cantidad.value;
    color_final.style.background = color.value;   
});

