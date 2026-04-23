function mostrarMensaje() {
    const mensajes = [
        "No estás solo, siempre hay alguien dispuesto a ayudarte.",
        "Tu bienestar es importante.",
        "Está bien pedir ayuda cuando la necesitas.",
        "Cada día es una nueva oportunidad para mejorar."

    ];

    let aleatorio = Math.floor(Math.random() * mensajes.length);
    document.getElementById("mensaje").textContent = mensajes[aleatorio];
}