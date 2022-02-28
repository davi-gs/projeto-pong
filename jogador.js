//variáveis da raquete do jogador
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//movimenta a raquete do jogador capturando o evento ao aperta a seta direcional pra cima ou para baixo do teclado
function movimentaRaquete (){
    if (keyIsDown(UP_ARROW)){
        yRaquete -= 10;
    } else if (keyIsDown (DOWN_ARROW)){
        yRaquete +=10;
    }
}

function verificaColisaoRaquete(){
    if (xBola - raioBola < xRaquete + raqueteComprimento && 
        yBola - raioBola < yRaquete + raqueteAltura && 
        yBola + raioBola > yRaquete){
        velocidadeXBola *=-1;
        raquetada.play();
    }
}