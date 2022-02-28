//Variaveis da Bola
let xBola = 300;
let yBola = 200;
let diametroBola = 25;
let raioBola = diametroBola/2;
//Velocidade da bola
let velocidadeXBola = 4;
let velocidadeYBola = 4;

function movimentaBola (){
    xBola += velocidadeXBola;
    yBola += velocidadeYBola;
}

function verificaColisaoBorda (){
    if (xBola + raioBola > width || xBola - raioBola < 0){
        velocidadeXBola *= -1;
    } else if (yBola + raioBola > height || yBola - raioBola < 0){
        velocidadeYBola *= -1;
    }
}