function setup() {
    createCanvas(600, 400);
    trilha.loop();
}

function draw() {
    background(0);
    mostraBola();
    movimentaBola();
    verificaColisaoBorda();
    mostraRaquete(xRaquete, yRaquete);
    movimentaRaquete();
    verificaColisaoRaquete();
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentaRaqueteOponente();
    verificaColisaoRaqueteOponente();
    incluiPlacar();
    marcaPonto();
}

function mostraBola (){
    circle (xBola, yBola, diametroBola);
}

function mostraRaquete (x, y){
    rect(x, y, raqueteComprimento, raqueteAltura);
}