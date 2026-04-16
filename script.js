const vidaAtual = document.querySelector(".vida_atual");
const vidaTotal = document.querySelector(".vida_total");
const barra = document.querySelector(".vida_cor");

const diminuir = document.querySelector(".dim_vida");
const aumentar = document.querySelector(".aum_vida");

function atualizarBarra(){
    let atual = Number(vidaAtual.textContent);
    let total = Number(vidaTotal.textContent);

    let porcentagem = (atual / total) * 100;

    barra.style.width = porcentagem + "%";
}

diminuir.addEventListener("click", () => {
    let atual = Number(vidaAtual.textContent);

    if (atual > 0){
        vidaAtual.textContent = atual - 1;
        atualizarBarra();
    }
});

aumentar.addEventListener("click", () => {
    let atual = Number(vidaAtual.textContent);
    let total = Number(vidaTotal.textContent);

    if (atual < total){
        vidaAtual.textContent = atual + 1;
        atualizarBarra();
    }
});

atualizarBarra();

function rolarD20(){
    return Math.floor(Math.random() * 20) + 1;
}
function mostrarResultado(nome, texto){

    const caixa = document.getElementById("resultado_dado");
    const titulo = document.getElementById("titulo_resultado");
    const conteudo = document.getElementById("texto_resultado");

    titulo.textContent = nome;
    conteudo.textContent = texto;

    caixa.classList.add("mostrar");
}
const mods = document.querySelectorAll(".abil_mod_car, .save_throw_car,.save_throw_sab, .abil_mod_sab, .save_throw_int, .abil_mod_int, .save_throw_const, .abil_mod_const, .save_throw_dex, .abil_mod_dex, .save_throw_forca, .abil_mod_forca");

mods.forEach(mod => {

    mod.closest("button").addEventListener("click", () => {

        let linha = mod.closest("tr, .elemento");

        let d20 = rolarD20();

        let modificador = Number(mod.textContent);

        let nome = linha.querySelector(".atributos .info")?.textContent;

        let total = d20 + modificador;

        mostrarResultado(
            nome,
            `d20: ${d20} | Mod: ${modificador} | Total: ${total}`
        );

    });

});
const botoes = document.querySelectorAll(".rolar_dado");

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        let linha = botao.closest("tr");

        let modificadorTexto = linha.querySelector("td p").textContent;
        let nome =linha.querySelector("td .nome_skill").textContent;

        let modificador = Number(modificadorTexto);

        let d20 = rolarD20();

        let total = d20 + modificador;

        mostrarResultado(
            nome,
            `d20: ${d20} | Mod: ${modificador} | Total: ${total}`
        );

    });

});
function trocarAba(id){
    document.querySelectorAll('.aba').forEach(aba => {
      aba.classList.remove('ativa');
    });
  
    document.getElementById(id).classList.add('ativa');
}