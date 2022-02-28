//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

// movimenta a raquete do oponente seguindo o eixo y da Bola e atribui uma margem de erro para a raquete
function movimentaRaqueteOponente(){
    velocidadeYOponente = yBola - yRaqueteOponente - raqueteComprimento / 2 - 50;
    yRaqueteOponente += velocidadeYOponente  
}

function verificaColisaoRaqueteOponente() {
    if (xBola + raioBola > xRaqueteOponente  &&
        yBola + raioBola < yRaqueteOponente + raqueteAltura  &&
        yBola + raioBola > yRaqueteOponente) {
        velocidadeXBola *= -1;
        raquetada.play();
    }
}