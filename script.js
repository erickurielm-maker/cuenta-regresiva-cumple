const FECHA_CUMBLE = new Date(2026, 8, 10);
const NOMBRE = 'Saúl Zárate';
const FRASES = [
    { icono: '💼', texto: 'El éxito no es casualidad, es la suma de decisiones correctas' },
    { icono: '🏢', texto: 'Los líderes no nacen, se forjan con constancia y visión' },
    { icono: '📈', texto: 'Tu visión empresarial trasciende generaciones' },
    { icono: '💎', texto: 'La sabiduría es el activo más valioso de un empresario' },
    { icono: '🏆', texto: 'El éxito no es un destino, es un camino que se recorre cada día' },
    { icono: '🚀', texto: 'Los imperios se construyen con la visión de hombres como tú' },
    { icono: '⭐', texto: 'Tu trayectoria es la mejor enseñanza para las nuevas generaciones' },
    { icono: '🔥', texto: 'La grandeza está en la capacidad de reinventarse cada día' },
    { icono: '🎯', texto: 'Los grandes empresarios ven oportunidades donde otros ven problemas' },
    { icono: '💪', texto: 'La experiencia es el mejor capital que se puede tener' },
    { icono: '🌟', texto: 'Tu nombre es sinónimo de excelencia y liderazgo' },
    { icono: '🎖️', texto: 'Los líderes como tú no siguen caminos, los crean' },
    { icono: '📊', texto: 'La constancia es la clave del éxito empresarial' },
    { icono: '💼', texto: 'El verdadero empresario deja un legado que trasciende' },
    { icono: '🚀', texto: 'Tu visión trasciende el presente y construye el futuro' },
    { icono: '🌟', texto: 'Los grandes como tú inspiran a toda una generación' },
    { icono: '💎', texto: 'El respeto se gana con años de trabajo y dedicación' },
    { icono: '🏅', texto: 'Los empresarios exitosos escriben su propia historia' },
    { icono: '📈', texto: 'Cada día es una oportunidad para hacer crecer tu legado' },
    { icono: '⚡', texto: 'La energía de un líder transforma todo a su alrededor' }
];
let temaActual = 0;
let intervaloGlobos = null;
let fraseActualIndex = 0;
let frasesUsadas = [];
let ultimaFraseMostrada = '';
function actualizarCuentaRegresiva() {
    const ahora = new Date();
    const diferencia = FECHA_CUMBLE - ahora;

    if (isNaN(FECHA_CUMBLE.getTime())) {
        console.error('❌ Fecha inválida');
        return;
    }

    if (diferencia <= 0) {
        document.getElementById('dias').textContent = '🎉';
        document.getElementById('horas').textContent = '🎉';
        document.getElementById('minutos').textContent = '🎉';
        document.getElementById('segundos').textContent = '🎉';
        document.querySelector('.frase-texto').textContent = `🎂 ¡FELIZ CUMPLEAÑOS ${NOMBRE}! 🎂`;
        if (!window.fuegosActivos) {
            window.fuegosActivos = true;
            setInterval(() => {
                if (Math.random() > 0.5) activarConfeti();
            }, 3000);
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
    const totalDias = 365;
    const progreso = Math.min((dias / totalDias) * 100, 100);
    document.querySelectorAll('.barra-progreso').forEach(bar => {
        bar.style.width = progreso + '%';
    });
    if (!window.fraseManual) {
        const indiceFrase = Math.floor(dias / 3) % FRASES.length;
        const frase = FRASES[indiceFrase];
        if (frase && frase.texto !== ultimaFraseMostrada) {
            actualizarFrase(frase);
            ultimaFraseMostrada = frase.texto;
        }
    }

    console.log(`📅 Días: ${dias} | Frase manual: ${window.fraseManual || 'No'}`);
}
function actualizarFrase(frase) {
    const mensajeEl = document.getElementById('mensaje-dia');
    const iconoEl = document.querySelector('.frase-icon');
    
    if (mensajeEl && iconoEl) {
        mensajeEl.style.opacity = '0';
        mensajeEl.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            mensajeEl.textContent = `"${frase.texto}"`;
            iconoEl.textContent = frase.icono || '💼';
            mensajeEl.style.opacity = '1';
            mensajeEl.style.transform = 'translateY(0)';
        }, 200);
    }
}
function cambiarFraseManual() {
    window.fraseManual = true;
    let fraseDisponible = null;
    let intentos = 0;
    const maxIntentos = 20;
    
    while (intentos < maxIntentos && !fraseDisponible) {
        const indice = Math.floor(Math.random() * FRASES.length);
        const frase = FRASES[indice];
        if (!frasesUsadas.includes(indice) || frasesUsadas.length >= FRASES.length) {
            fraseDisponible = frase;
            if (frasesUsadas.length >= FRASES.length) {
                frasesUsadas = [];
            }
            frasesUsadas.push(indice);
        }
        intentos++;
    }
    
    if (fraseDisponible) {
        actualizarFrase(fraseDisponible);
        ultimaFraseMostrada = fraseDisponible.texto;
        const btn = document.querySelector('.btn-tertiary');
        if (btn) {
            btn.style.transform = 'scale(1.1)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 200);
        }
    }
}
function resetearFrasesAutomaticas() {
    window.fraseManual = false;
}
function initParticulas() {
    const canvas = document.getElementById('canvas-particulas');
    const ctx = canvas.getContext('2d');
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const particulas = [];
    const colores = ['#f5576c', '#4facfe', '#43e97b', '#fa709a', '#f093fb', '#ffd700'];
    
    class Particula {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 2 + 1;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.color = colores[Math.floor(Math.random() * colores.length)];
            this.opacity = Math.random() * 0.5 + 0.1;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x < 0 || this.x > width) this.speedX *= -1;
            if (this.y < 0 || this.y > height) this.speedY *= -1;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity;
            ctx.fill();
            
            ctx.shadowColor = this.color;
            ctx.shadowBlur = 10;
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }
    
    for (let i = 0; i < 80; i++) {
        particulas.push(new Particula());
    }
    
    function animarParticulas() {
        ctx.clearRect(0, 0, width, height);
        particulas.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animarParticulas);
    }
    
    animarParticulas();
    
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
}

function crearGlobos() {
    const container = document.getElementById('globos-container');
    if (!container) return;
    
    const emojis = ['🎈', '🎈', '🎈', '🎈', '🎈'];
    const cantidad = 8 + Math.floor(Math.random() * 5);
    
    for (let i = 0; i < cantidad; i++) {
        setTimeout(() => {
            const globo = document.createElement('div');
            globo.className = 'globo';
            globo.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            globo.style.left = (5 + Math.random() * 90) + '%';
            globo.style.fontSize = (2 + Math.random() * 2.5) + 'rem';
            globo.style.animationDuration = (12 + Math.random() * 15) + 's';
            globo.style.animationDelay = (Math.random() * 3) + 's';
            container.appendChild(globo);
            setTimeout(() => {
                if (globo.parentNode) globo.remove();
            }, 25000);
        }, i * 300);
    }
}

function activarGlobos() {
    if (intervaloGlobos) {
        clearInterval(intervaloGlobos);
        intervaloGlobos = null;
        const btn = document.querySelector('.btn-secondary');
        if (btn) btn.innerHTML = '<span class="icon">🎈</span> Globos';
    } else {
        crearGlobos();
        intervaloGlobos = setInterval(crearGlobos, 10000);
        const btn = document.querySelector('.btn-secondary');
        if (btn) btn.innerHTML = '<span class="icon">⛔</span> Detener';
    }
}
function activarConfeti() {
    const emojis = ['🎉', '🎊', '⭐', '✨', '💫', '🌟', '🎆', '🎇', '🏆', '💼'];
    const container = document.getElementById('confeti-container');
    if (!container) return;
    
    const cantidad = 60 + Math.floor(Math.random() * 40);
    
    for (let i = 0; i < cantidad; i++) {
        setTimeout(() => {
            const confeti = document.createElement('div');
            confeti.className = 'confeti-item';
            confeti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            confeti.style.left = Math.random() * 100 + '%';
            confeti.style.fontSize = (1.5 + Math.random() * 2.5) + 'rem';
            confeti.style.animationDuration = (2 + Math.random() * 3) + 's';
            container.appendChild(confeti);
            setTimeout(() => {
                if (confeti.parentNode) confeti.remove();
            }, 5000);
        }, i * 30);
    }
}
function cambiarTema() {
    const temas = [
        'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
        'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)',
        'linear-gradient(135deg, #2d1b69, #11998e, #38ef7d)',
        'linear-gradient(135deg, #8E2DE2, #4A00E0)',
        'linear-gradient(135deg, #000428, #004e92)',
        'linear-gradient(135deg, #1f4037, #99f2c8)',
        'linear-gradient(135deg, #42275a, #734b6d)',
        'linear-gradient(135deg, #232526, #414345)'
    ];
    
    temaActual = (temaActual + 1) % temas.length;
    document.body.style.background = temas[temaActual];
    document.body.style.backgroundSize = 'cover';
    const btn = document.querySelector('.btn-quaternary');
    if (btn) {
        btn.style.transform = 'scale(1.1)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 200);
    }
}
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Iniciando cuenta regresiva para', NOMBRE);
    console.log('📅 Fecha objetivo:', FECHA_CUMBLE.toLocaleDateString());
    initParticulas();
    setTimeout(crearGlobos, 1000);
    intervaloGlobos = setInterval(crearGlobos, 12000);
    actualizarCuentaRegresiva();
    setInterval(actualizarCuentaRegresiva, 1000);
    
    console.log('✅ ¡Todo listo!');
    console.log('💡 Presiona "Nueva Frase" para cambiar la frase manualmente');
});
window.onerror = function(msg, url, line, col, error) {
    console.error('❌ Error:', msg);
    console.error('📍 Línea:', line);
};
