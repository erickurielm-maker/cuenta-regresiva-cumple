* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #003087 0%, #CE1126 50%, #FFFFFF 100%);
    background-size: 400% 400%;
    animation: gradiente 10s ease infinite;
    overflow: hidden;
    position: relative;
}

@keyframes gradiente {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}
#particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
}

.particula {
    position: absolute;
    width: 4px;
    height: 4px;
    background: white;
    border-radius: 50%;
    opacity: 0.3;
    animation: flotar 20s infinite linear;
}

@keyframes flotar {
    0% { transform: translateY(100vh) scale(0); opacity: 0; }
    10% { opacity: 0.3; }
    90% { opacity: 0.3; }
    100% { transform: translateY(-10vh) scale(1); opacity: 0; }
}

/* Contenedor principal */
.container {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(20px);
    padding: 3rem 2rem;
    border-radius: 40px;
    box-shadow: 0 30px 60px rgba(0,0,0,0.5), inset 0 0 80px rgba(255,255,255,0.1);
    text-align: center;
    max-width: 850px;
    width: 95%;
    z-index: 1;
    border: 2px solid rgba(255,255,255,0.2);
    animation: aparecer 1.5s ease-out;
}

@keyframes aparecer {
    from { opacity: 0; transform: scale(0.8) rotate(-5deg); }
    to { opacity: 1; transform: scale(1) rotate(0deg); }
}

h1 {
    font-size: 2.5rem;
    color: #FFFFFF;
    margin-bottom: 2rem;
    text-shadow: 0 0 30px rgba(0,48,135,0.8), 0 0 60px rgba(206,17,38,0.5);
    animation: titilar 2s infinite alternate;
    letter-spacing: 2px;
}

@keyframes titilar {
    from { text-shadow: 0 0 20px rgba(0,48,135,0.8), 0 0 40px rgba(206,17,38,0.3); }
    to { text-shadow: 0 0 40px rgba(0,48,135,1), 0 0 80px rgba(206,17,38,0.6), 0 0 120px rgba(255,255,255,0.3); }
}
.countdown {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin: 2rem 0;
}

.box {
    background: rgba(255, 255, 255, 0.2);
    padding: 1.5rem 1.8rem;
    border-radius: 25px;
    min-width: 100px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.3);
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    transition: all 0.3s ease;
    animation: rebote 3s infinite;
}

.box:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 20px 50px rgba(0,0,0,0.4);
    border-color: #CE1126;
}

@keyframes rebote {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
}

.box span {
    font-size: 3.5rem;
    font-weight: bold;
    color: #FFFFFF;
    display: block;
    text-shadow: 0 0 20px rgba(0,48,135,0.8);
    font-family: 'Arial Black', sans-serif;
}

.box:nth-child(1) span { color: #003087; }  /* Días - Azul */
.box:nth-child(2) span { color: #CE1126; }  /* Horas - Rojo */
.box:nth-child(3) span { color: #FFFFFF; }  /* Minutos - Blanco */
.box:nth-child(4) span { color: #003087; }  /* Segundos - Azul */

.box p {
    font-size: 1rem;
    color: rgba(255,255,255,0.9);
    margin-top: 8px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
}
.mensaje-dia {
    margin: 2rem auto;
    padding: 1.2rem 2rem;
    font-size: 1.6rem;
    font-weight: bold;
    color: #FFFFFF;
    background: linear-gradient(135deg, rgba(0,48,135,0.7), rgba(206,17,38,0.7));
    border-radius: 60px;
    display: inline-block;
    border: 2px solid rgba(255,255,255,0.3);
    backdrop-filter: blur(5px);
    animation: pulsar 2s infinite;
    min-height: 80px;
    max-width: 90%;
}

@keyframes pulsar {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.02); }
}
.botones {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin: 1.5rem 0;
}

.btn {
    padding: 12px 28px;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    background: linear-gradient(135deg, #003087, #CE1126);
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    letter-spacing: 1px;
}

.btn:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    background: linear-gradient(135deg, #CE1126, #003087);
}

.btn:active {
    transform: scale(0.95);
}
.escudo {
    font-size: 3rem;
    margin-top: 1.5rem;
    animation: girar 10s infinite linear;
    text-shadow: 0 0 30px rgba(255,255,255,0.5);
}

@keyframes girar {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
.confeti {
    position: fixed;
    top: -10px;
    font-size: 2rem;
    animation: caer 3s linear forwards;
    pointer-events: none;
    z-index: 999;
}

@keyframes caer {
    to {
        transform: translateY(110vh) rotate(720deg);
        opacity: 0;
    }
}
.fuego-artificial {
    position: fixed;
    font-size: 4rem;
    animation: explotar 2s ease-out forwards;
    pointer-events: none;
    z-index: 999;
}

@keyframes explotar {
    0% { transform: scale(0) rotate(0deg); opacity: 1; }
    50% { transform: scale(3) rotate(180deg); opacity: 1; }
    100% { transform: scale(5) rotate(360deg); opacity: 0; }
}
@media (max-width: 600px) {
    h1 { font-size: 1.8rem; }
    .box { padding: 1rem; min-width: 70px; }
    .box span { font-size: 2.5rem; }
    .mensaje-dia { font-size: 1.2rem; padding: 1rem; }
    .btn { padding: 8px 16px; font-size: 0.9rem; }
}
