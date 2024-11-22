// Configuración del gráfico radial
document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("graficoRadial").getContext("2d");
    new Chart(ctx, {
        type: "radar",  // Cambiamos el tipo a "radar" para obtener un gráfico radial
        data: {
            labels: ["Diseño 2D", "Animación 3D", "Rigging", "Programación", "Narrativa","Fotografia"],
            datasets: [
                {
                    label: "Habilidades",
                    data: [90, 90, 85, 80, 90,95], // Porcentajes de habilidad
                    backgroundColor: "rgba(0, 123, 255, 0.2)",
                    borderColor: "rgba(0, 123, 255, 1)",
                    borderWidth: 1,
                    pointBackgroundColor: "rgba(0, 123, 255, 1)",
                },
            ],
        },
        options: {
            responsive: true,
            scale: {
                ticks: {
                    beginAtZero: true,
                    max: 100,  // Maximo valor para las habilidades
                },
            },
        },
    });
});
