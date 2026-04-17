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
