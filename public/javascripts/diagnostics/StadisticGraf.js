// Obtener una referencia al elemento canvas del DOM
const $grafica = document.querySelector("#grafica");

function GetEtiquetas(t){
    if (t=="Ventas Por Mes"){
        return ["Enero", "Febrero", "Marzo", "Abril"];
    }else{
        if (t=="Ventas por Año"){
            return ["2018", "2019", "2020", "2021"];
        }
    }
    
}

function GetData(t){
    if (t=="Ventas Por Mes"){
        return [500, 700, 400, 80];
    }else{
        if (t=="Ventas por Año"){
            return [2000, 3000, 1500, 600];
        }
    }
}


function btnGraficar() {
    //Titulo de grafica
    var Tittle = document.getElementById('Select-FiltroBuscador').value;
    // Las etiquetas son las que van en el eje X. 
    var etiquetas = GetEtiquetas(Tittle);
    //Data, esta debe ser igual al eje x
    var DataGraf = GetData(Tittle);

    // Podemos tener varios conjuntos de datos. Comencemos con uno
    const datosVentas2020 = {
        label: Tittle,//titulo de la grafica
        data: DataGraf, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
        backgroundColor: 'rgba(0,0,255,0.2)', // Color de fondo
        borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
        borderWidth: 1,// Ancho del borde
    };

    new Chart($grafica, {
        type: 'bar',// Tipo de gráfica
        data: {
            labels: etiquetas,//etiquetas eje x
            datasets: [
                datosVentas2020,
                // Aquí más datos...
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
            },
        }
    });

}

btnGraficar();

