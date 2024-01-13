const depoimentos = 3;
let depoimentoAtual = 1;

function abrirProximoDepoimento() {
    $("#depoimento-" + depoimentoAtual).addClass('hidden');
    $("#btnDepoimento-" + depoimentoAtual).removeClass('active');

    depoimentoAtual = (depoimentoAtual % depoimentos) + 1;

    $("#depoimento-" + depoimentoAtual).removeClass('hidden');
    $("#btnDepoimento-" + depoimentoAtual).addClass('active');
}
const intervaloCarrossel = setInterval(abrirProximoDepoimento, 3000);
// Função para parar o carrossel (por exemplo, quando o usuário interagir com os botões)
function pararCarrossel() {
    clearInterval(intervaloCarrossel);
}
$("#btnDepoimento-1, #btnDepoimento-2, #btnDepoimento-3").click(function() {
    pararCarrossel();
});