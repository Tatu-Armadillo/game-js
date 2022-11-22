// Painel
let width = 600;
let height = 400;

// Variaveis Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

// Velocidade bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

// Variaveis Raquete
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

// Variaveis do oponente;
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente = 0;
let chanceDeErrar = 0;

// Placar do Jogo
let meusPontos = 0;
let pontosOponente = 0;

// Sons do jogo
let raquetada;
let ponto;
let trilha;

function preload() {
  trilha = loadSound("songs/trilha.mp3");
  ponto = loadSound("songs/ponto.mp3");
  raquetada = loadSound("songs/raquetada.mp3");
}

function setup() {
  createCanvas(width, height);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();

  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete();

  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaOponenteRaquete();
  verificaColisaoOponenteRaquete();

  incluiPlacar();
  marcaPonto();

}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }

  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y) {
  rect(x, y, comprimentoRaquete, alturaRaquete);
}

function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete() {
  if (xBolinha - raio < xRaquete + comprimentoRaquete
    && yBolinha - raio < yRaquete + alturaRaquete
    && yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function verificaColisaoOponenteRaquete() {
  if (xBolinha - raio > xRaqueteOponente - comprimentoRaquete
    && yBolinha - raio > yRaqueteOponente - alturaRaquete
    && yBolinha + raio > yRaqueteOponente) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function movimentaOponenteRaquete() {
  // Maquina
  // velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoRaquete / 2 - 30;
  // yRaqueteOponente += velocidadeYOponente + chanceDeErrar
  // calculaChanceDeErrar()

  // Multiplayer
  if (keyIsDown(87)) {
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(83)) {
    yRaqueteOponente += 10;
  }
}

function calculaChanceDeErrar() {
  if (pontosOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39) {
      chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35) {
      chanceDeErrar = 35
    }
  }
}

function incluiPlacar() {
  stroke(255)
  textAlign(CENTER);
  textSize(16);
  fill(255, 140, 0);
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(255, 140, 0);
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosOponente, 470, 26);
}

function marcaPonto() {
  if (xBolinha > 590) {
    meusPontos++;
    ponto.play();
  }
  if (xBolinha < 10) {
    pontosOponente++;
    ponto.play();
  }
}
