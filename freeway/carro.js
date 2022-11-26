
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(carro) {
    image(imagemCarros[carro], xCarros[carro], yCarros[carro], comprimentoCarro, alturaCarro);
}

function aceleraCarro(carro) {
    xCarros[carro] -= velocidadeCarros[carro];
}

function voltaPosicaoInicialCarro(carro) {
    if (xCarros[carro] < -50) {
        xCarros[carro] = 600;
    }
}

function movimentaCarro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        aceleraCarro(i);
        mostraCarro(i);
        voltaPosicaoInicialCarro(i);
    }
}
