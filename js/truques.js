let truquesCache = [];

async function carregarTruques() {
    const { data, error } = await supabaseClient
    .from("truques")
    .select("*");

    if (error) {
        console.error("Erro ao carregar truques:", error);
        return;
    }

    truquesCache = data;

    const lista = document.getElementById("lista_truques");
    lista.innerHTML = "";

    truquesCache.forEach(truque => {
        lista.innerHTML += `
            <tr class="truque" data-id="${truque.id}">
                <td>
                    <div class="info">
                        <p class="nome_truque">${truque.nome}</p>
                    </div>
                </td>
                <td>
                    <div class="info">
                        <p class="tipo_truque">${truque.tipo}</p>
                    </div>
                </td>
            </tr>
        `;
    });

    adicionarEventosTruques();
}

function adicionarEventosTruques() {
    const linhas = document.querySelectorAll(".truque");

    linhas.forEach(tr => {
        tr.onclick = function () {
            const id = Number(this.dataset.id);
            const truque = truquesCache.find(t => t.id === id);

            if (truque) {
                abrirPopupTruque(truque);
            }
        };
    });
}

function abrirPopupTruque(truque) {
    document.getElementById("popup_nome").textContent = truque.nome;
    document.getElementById("popup_tipo").textContent = truque.tipo;
    document.getElementById("popup_tempo").textContent = truque.tempo;
    document.getElementById("popup_alcance").textContent = truque.alcance;
    document.getElementById("popup_componentes").textContent = truque.componentes;
    document.getElementById("popup_duracao").textContent = truque.duracao;
    document.getElementById("popup_descricao").textContent = truque.descricao;

    document.getElementById("popup_truque").style.display = "flex";
}

function fecharPopup() {
    document.getElementById("popup_truque").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    carregarTruques();

    const popup = document.getElementById("popup_truque");

    popup.addEventListener("click", function (e) {
        if (e.target === this) {
            fecharPopup();
        }
    });
});