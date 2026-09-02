const FECHA_CUMPLE = new Date(2026, 8, 10); // 10 de septiembre de 2026
const MENSAJES_DIA = [
    { dia: 0, mensaje: '🌟 "Hoy comienza una semana de triunfos" - Cruz Azul' },
    { dia: 1, mensaje: '⚽ "El esfuerzo de hoy es el triunfo de mañana" - La Máquina' },
    { dia: 2, mensaje: '💪 "Los campeones no se rinden, se reinventan" - Cemento' },
    { dia: 3, mensaje: '🏆 "El equipo que lucha unido, siempre gana" - La Nación' },
    { dia: 4, mensaje: '🔥 "La garra cementera nos hace invencibles" - ídolo' },
    { dia: 5, mensaje: '✨ "Cada día es una oportunidad para ser mejor" - Leyenda' },
    { dia: 6, mensaje: '🎯 "Con trabajo y fe, todo es posible" - Historia Azul' },
    { dia: 7, mensaje: '🚀 "El cielo es el límite para La Máquina" - Afición' },
    { dia: 8, mensaje: '🎂 "Se acerca el día más esperado del año" - Celebración' },
    { dia: 9, mensaje: '🎉 "Mañana es el gran día, ¡prepárate!" - Fiesta' },
    { dia: 10, mensaje: '🥳 "¡HOY ES MI CUMPLEAÑOS! ¡FELICIDADES!" - 🎂🎉' }
];
let temaActual = 0;
let sonidoActivo = true;
let intervaloConfeti = null;
function actualizarCuentaRegresiva() {
    const ahora = new Date();
    const diferencia = FECHA_CUMPLE - ahora;

    if (diferencia <= 0) {
        document.getElementById('dias').textContent = '🎉';
        document.getElementById('horas').textContent = '🎉';
        document.getElementById('minutos').textContent = '🎉';
        document.getElementById('segundos').textContent = '🎉';
        document.getElementById('mensaje-dia').textContent = '🥳 ¡HOY ES MI CUMPLEAÑOS! 🎂🎉';
        document.getElementById('titulo').textContent = '🎂 ¡FELIZ CUMPLEAÑOS! 🎂';
        if (!document.querySelector('.fuego-artificial')) {
            setInterval(crearFuegoArtificial, 500);
        }
        return;
    }
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById('dias').textContent = String(dias).padStart(2, '0');
    document.getElementById('horas').textContent = String(horas).padStart(2, '0');
    document.getElementById('minutos').textContent = String(minutos).padStart(2, '0');
    document.getElementById('segundos').textContent = String(segundos).padStart(2, '0');
    const indiceMensaje = Math.min(Math.floor(dias / 3), MENSAJES_DIA.length - 1);
    const mensajeDelDia = MENSAJES_DIA[indiceMensaje] || MENSAJES_DIA[0];
    document.getElementById('mensaje-dia').textContent = mensajeDelDia.mensaje;
    const colores = ['#003087', '#CE1126', '#FFFFFF', '#003087', '#CE1126'];
    document.querySelectorAll('.box span').forEach((span, i) => {
        span.style.color = colores[i % colores.length];
    });
}
function crearParticulas() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 30; i++) {
        const particula = document.createElement('div');
        particula.className = 'particula';
        particula.style.left = Math.random() * 100 + '%';
        particula.style.animationDuration = (15 + Math.random() * 20) + 's';
        particula.style.animationDelay = (Math.random() * 20) + 's';
        particula.style.width = (2 + Math.random() * 5) + 'px';
        particula.style.height = particula.style.width;
        container.appendChild(particula);
    }
}
crearParticulas();
function activarConfeti() {
    const emojis = ['🎉', '🎊', '⭐', '🏆', '⚽', '💙', '❤️', '✨'];
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confeti = document.createElement('div');
            confeti.className = 'confeti';
            confeti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            confeti.style.left = Math.random() * 100 + '%';
            confeti.style.fontSize = (1 + Math.random() * 2) + 'rem';
            confeti.style.animationDuration = (2 + Math.random() * 3) + 's';
            document.body.appendChild(confeti);
            setTimeout(() => confeti.remove(), 5000);
        }, i * 30);
    }
}
function crearFuegoArtificial() {
    const emojis = ['🎆', '🎇', '✨', '💥', '🌟', '⚽', '🏆'];
    for (let i = 0; i < 8; i++) {
        const fuego = document.createElement('div');
        fuego.className = 'fuego-artificial';
        fuego.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        fuego.style.left = (10 + Math.random() * 80) + '%';
        fuego.style.top = (10 + Math.random() * 80) + '%';
        document.body.appendChild(fuego);
        setTimeout(() => fuego.remove(), 3000);
    }
}
function cambiarTema() {
    const temas = [
        { bg: 'linear-gradient(135deg, #003087 0%, #CE1126 50%, #FFFFFF 100%)', 
          shadow: '0 0 40px rgba(0,48,135,0.8)' },
        { bg: 'linear-gradient(135deg, #CE1126 0%, #003087 50%, #FFFFFF 100%)',
          shadow: '0 0 40px rgba(206,17,38,0.8)' },
        { bg: 'linear-gradient(135deg, #FFFFFF 0%, #003087 50%, #CE1126 100%)',
          shadow: '0 0 40px rgba(255,255,255,0.8)' }
    ];
    
    temaActual = (temaActual + 1) % temas.length;
    const tema = temas[temaActual];
    document.body.style.background = tema.bg;
    document.querySelector('.container').style.boxShadow = tema.shadow;
}
function cambiarFraseManual() {
    const mensajes = [
        '💪 "El que persevera, alcanza" - La Máquina',
        '⚽ "El fútbol es pasión, entrega y corazón"',
        '🏆 "Cada día es una final" - Cruz Azul',
        '🔥 "La garra cementera nos hace grandes"',
        '🌟 "El equipo de México, el equipo del pueblo"',
        '🎯 "Con fe y trabajo, todo se logra"',
        '🚀 "La historia se escribe con esfuerzo"',
        '💙 "Azul de corazón, rojo de pasión"'
    ];
    const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
    document.getElementById('mensaje-dia').textContent = mensaje;
}
function toggleSonido() {
    sonidoActivo = !sonidoActivo;
    document.getElementById('btn-musica').textContent = sonidoActivo ? '🔇 Silenciar' : '🔊 Activar Sonido';
    alert(sonidoActivo ? '🔊 Sonido activado' : '🔇 Sonido desactivado');
}
document.getElementById('btn-confeti').addEventListener('click', activarConfeti);
document.getElementById('btn-tema').addEventListener('click', cambiarTema);
document.getElementById('btn-mensaje').addEventListener('click', cambiarFraseManual);
document.getElementById('btn-musica').addEventListener('click', toggleSonido);
actualizarCuentaRegresiva();
setInterval(actualizarCuentaRegresiva, 1000);
