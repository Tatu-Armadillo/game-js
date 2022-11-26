function setup() {
    createCanvas(500, 400);
    // somTrilha.loop();
}

function draw() {
    background(imagemEstrada);
    mostraAtor();
    movimentaAtor();

    movimentaCarro();
    verificaColisao();

    marcaPontos();
    incluiPontos();
}

