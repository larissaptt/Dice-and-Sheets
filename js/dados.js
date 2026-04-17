function rolarD20(){
    return Math.floor(Math.random() * 20) + 1;
}
function mostrarResultado(titulo, texto, total){

    document.getElementById("titulo_resultado").textContent = titulo;
    document.getElementById("texto_resultado").textContent = texto;
    document.getElementById("numero_total").textContent = total;

    let alert = document.getElementById("resultado_dado");

    alert.classList.add("mostrar");
}
document.getElementById("fechar_resultado").addEventListener("click", () => {
    document.getElementById("resultado_dado").classList.remove("mostrar");
});
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
            `d20: ${d20} | Mod: ${modificador}`,
            total
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
            `d20: ${d20} | Mod: ${modificador}`,
            total
        );

    });

});