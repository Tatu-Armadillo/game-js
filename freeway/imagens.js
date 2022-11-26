// Imagens
let imagemEstrada;
let imagemAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemCarros = [];

// Sons
let somTrilha;
let somColisao;
let somPonto;

function preload() {
    imagemEstrada = loadImage("material/estrada.png");
    imagemAtor = loadImage("material/ator-1.png");
    imagemCarro1 = loadImage("material/carro-1.png");
    imagemCarro2 = loadImage("material/carro-2.png");
    imagemCarro3 = loadImage("material/carro-3.png");
    imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];

    somTrilha = loadSound("material/sons/trilha.mp3");
    somPonto = loadSound("material/sons/pontos.wav");
    somColisao = loadSound("material/sons/colidiu.mp3");
}