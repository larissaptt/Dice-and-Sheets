/* =========================
SUPABASE
========================= */

async function carregarArmas(){

    let { data, error } = await supabaseClient
        .from("armas")
        .select("*");

    console.log("DATA:", data);
    console.log("ERROR:", error);

    if(error){
        console.error(error);
        return;
    }

    mostrarArmas(data);
}


/* =========================
ABRIR POPUP
========================= */

document.querySelector(".adicionar_inv").addEventListener("click", () => {

    document.getElementById("popup_armas").style.display = "flex";

    carregarArmas();

});


/* =========================
LISTAR ARMAS
========================= */

function mostrarArmas(armas){

    let container = document.getElementById("lista_armas");

    container.innerHTML = "";

    armas.forEach(arma => {

        let botao = document.createElement("button");

        botao.classList.add("item_add");

        botao.textContent = arma.nome;

        botao.dataset.nome = arma.nome;
        botao.dataset.categoria = arma.categoria;
        botao.dataset.dano1h = arma.dano_1H;
        botao.dataset.dano2h = arma.dano_2H;
        botao.dataset.tipo = arma.tipo_dano;
        botao.dataset.alcance = arma.alcance;
        botao.dataset.alcance_longo = arma.alcance_longo;
        botao.dataset.peso = arma.peso;
        botao.dataset.prop = arma.propriedades;
        botao.dataset.magico = arma.magico;

        botao.addEventListener("click", mostrarDetalhes);

        container.appendChild(botao);
    });

}


/* =========================
MOSTRAR DETALHES
========================= */

function mostrarDetalhes(event){

    let btn = event.currentTarget;

    let arma = {
        nome: btn.dataset.nome,
        categoria: btn.dataset.categoria,
        dano1h: btn.dataset.dano1h,
        dano2h: btn.dataset.dano2h,
        tipo: btn.dataset.tipo,
        alcance: btn.dataset.alcance,
        alcance_longo: btn.dataset.alcance_longo,
        peso: btn.dataset.peso,
        prop: btn.dataset.prop,
        magico: btn.dataset.magico
    };

    let container = document.getElementById("detalhes_arma");

    container.innerHTML = `
        <h3>${arma.nome}</h3>

        <p><b>Categoria:</b> ${arma.categoria}</p>

        <p><b>Dano (1 mão):</b> ${arma.dano1h}</p>
        <p><b>Dano (2 mãos):</b> ${arma.dano2h}</p>

        <p><b>Tipo de dano:</b> ${arma.tipo}</p>

        <p><b>Alcance:</b> ${arma.alcance}</p>
        <p><b>Alcance longo:</b> ${arma.alcance_longo}</p>

        <p><b>Peso:</b> ${arma.peso}</p>

        <p><b>Propriedades:</b> ${arma.prop}</p>

        <p><b>Mágico:</b> ${arma.magico == "true" ? "Sim" : "Não"}</p>

        <button id="add_arma">Adicionar ao inventário</button>
    `;

    document
        .getElementById("add_arma")
        .addEventListener("click", () => adicionarAoInventario(arma));

}


/* =========================
ADICIONAR AO INVENTÁRIO
========================= */

function adicionarAoInventario(arma){

    let tabela = document.querySelector(".inv_carregando table");
    let tbody = tabela.querySelector("tbody");

    let botaoLinha = tbody.querySelector(".linha_add").closest("tr");

    let linha = document.createElement("tr");

    linha.innerHTML = `
        <td>
            <div class="info">
                <input type="checkbox" class="check">
            </div>
        </td>

        <td>
            <div class="info">
                <button>${arma.nome}</button>
            </div>
        </td>

        <td>
            <div class="info">
                1
            </div>
        </td>
    `;

    tbody.insertBefore(linha, botaoLinha);
}

/* =========================
FECHAR POPUP
========================= */

document
.getElementById("fechar_popup")
.addEventListener("click", () => {

    document.getElementById("popup_armas").style.display = "none";

});