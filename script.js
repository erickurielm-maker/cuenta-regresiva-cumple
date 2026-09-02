// FECHA DEL CUMPLEAÑOS (10 de septiembre de 2026)
const FECHA_CUMPLE = new Date(2026, 8, 10);

// FRASES MOTIVACIONALES
const FRASES = [
    '💪 "El esfuerzo de hoy es el triunfo de mañana" - La Máquina',
    '⚽ "Los campeones no se rinden" - Cruz Azul',
    '🏆 "El equipo que lucha unido, siempre gana"',
    '🔥 "La garra cementera nos hace invencibles"',
    '✨ "Cada día es una oportunidad para ser mejor"',
    '🎯 "Con trabajo y fe, todo es posible"',
    '🚀 "El cielo es el límite para La Máquina"',
    '💙 "Azul de corazón, rojo de pasión"'
];

// ======== FUNCIÓN PRINCIPAL ========
function actualizarCuentaRegresiva() {
    const ahora = new Date();
    const diferencia = FECHA_CUMBLE - ahora;

    // Si es el día del cumpleaños
    if (diferencia <= 0) {
        document.getElementById('dias').textContent = '🎉';
        document.getElementById('horas').textContent = '🎉';
        document.getElementById('minutos').textContent = '🎉';
        document.getElementById('segundos').textContent = '🎉';
        document.getElementById('mensaje-dia').textContent = '🥳 ¡HOY ES MI CUMPLEAÑOS! 🎂🎉';
        document.querySelector('h1').textContent = '🎂 ¡FELIZ CUMPLEAÑOS! 🎂';
        return;
    }

    // Calcular días, horas, minutos, segundos
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Actualizar números
    document.getElementById('dias').textContent = String(dias).padStart(2, '0');
    document.getElementById('horas').textContent = String(horas).padStart(2, '0');
    document.getElementById('minutos').textContent = String(minutos).padStart(2, '0');
    document.getElementById('segundos').textContent = String(segundos).padStart(2, '0');

    // Cambiar frase según los días restantes
    const indiceFrase = Math.min(Math.floor(dias / 3), FRASES.length - 1);
    document.getElementById('mensaje-dia').textContent = FRASES[indiceFrase] || FRASES[0];
}

// ======== CONFETI ========
function activarConfeti() {
    const emojis = ['🎉', '🎊', '⭐', '🏆', '⚽', '💙', '❤️', '✨'];
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confeti = document.createElement('div');
            confeti.className = 'confeti';
            confeti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            confeti.style.left = Math.random() * 100 + '%';
            confeti.style.fontSize = (1 + Math.random() * 2) + 'rem';
            document.body.appendChild(confeti);
            setTimeout(() => confeti.remove(), 3000);
        }, i * 30);
    }
}

// ======== CAMBIAR TEMA ========
function cambiarTema() {
    const temas = [
        'linear-gradient(135deg, #003087 0%, #CE1126 50%, #FFFFFF 100%)',
        'linear-gradient(135deg, #CE1126 0%, #003087 50%, #FFFFFF 100%)',
        'linear-gradient(135deg, #FFFFFF 0%, #003087 50%, #CE1126 100%)'
    ];
    const actual = document.body.style.background;
    let nuevo = temas[0];
    if (actual === temas[0] || !actual) nuevo = temas[1];
    else if (actual === temas[1]) nuevo = temas[2];
    else nuevo = temas[0];
    document.body.style.background = nuevo;
}

// ======== NUEVA FRASE ========
function nuevaFrase() {
    const frase = FRASES[Math.floor(Math.random() * FRASES.length)];
    document.getElementById('mensaje-dia').textContent = frase;
}

// ======== INICIAR ========
actualizarCuentaRegresiva();
setInterval(actualizarCuentaRegresiva, 1000);

// Probar en consola que todo funciona
console.log('✅ Cuenta regresiva iniciada correctamente');
console.log('📅 Fecha objetivo:', FECHA_CUMBLE.toLocaleDateString());
