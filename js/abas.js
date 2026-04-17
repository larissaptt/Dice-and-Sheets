window.trocarAba = function(id){

    document.querySelectorAll(".aba").forEach(aba => {
        aba.classList.remove("ativa");
    });

    document.getElementById(id).classList.add("ativa");

}