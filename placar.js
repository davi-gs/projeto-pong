// placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

// desenha placar do jogo
function incluiPlacar(){
    stroke(255); //adiciona contorno branco
    textAlign(CENTER); // centraliza o texto
    textSize (16); // define o tamanho da letra
    fill(color(255, 140, 0)); //adciona a cor laranja usando o padrão RGB
    rect(220, 10, 40, 20); // desenha o retangulo onde os pontos são colocados
    fill (255); // pinta de branco a numeração dos pontos
    text(meusPontos, 240, 26); // escreve os pontos e posiciona
    fill(color(255, 140, 0)); //adciona a cor laranja usando o padrão RGB
    rect (350, 10, 40, 20); // desenha o retangulo onde os pontos são colocados
    fill (255); // pinta de branco a numeração dos pontos
    text(pontosDoOponente, 370, 26); // escreve os pontos e posiciona
}

//responsavel por somar o placar de pontos caso a bolinha acerte o lado do oponente ou jogador
function marcaPonto(){
    if (xBola  > 585){
        meusPontos += 1;
        ponto.play();
    } else if (xBola  < 15){
        pontosDoOponente += 1;
        ponto.play();
    }
}

