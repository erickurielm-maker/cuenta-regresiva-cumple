
const hoy = new Date();
let añoObjetivo = hoy.getFullYear();
const fechaCumple = new Date(añoObjetivo, 8, 10); 
if (hoy > fechaCumple) {
    fechaCumple.setFullYear(añoObjetivo + 1);
}
function actualizarCuentaRegresiva() {
    const ahora = new Date();
    const diferencia = fechaCumple - ahora;
    if (diferencia <= 0) {
        document.getElementById('dias').textContent = '🎉';
        document.getElementById('horas').textContent = '🎉';
        document.getElementById('minutos').textContent = '🎉';
        document.getElementById('segundos').textContent = '🎉';
        document.getElementById('mensaje').textContent = '¡HOY ES MI CUMPLEAÑOS! 🥳🎂';
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
    const mensajes = [
        '🎈 ¡Se acerca el gran día!',
        '🎁 Prepara los regalos',
        '🍰 Ya casi es hora del pastel',
        '✨ Va a ser un día especial'
    ];
    const indice = Math.floor((dias + horas) % mensajes.length);
    document.getElementById('mensaje').textContent = mensajes[indice];
}
actualizarCuentaRegresiva();
setInterval(actualizarCuentaRegresiva, 1000);