/* 
    OBJETIVO -  alterar entre conteudos de abas

    1 pegar os elementos que representam as abas
    2 identificar o clique do elemento
    3 quando clicar desmarcar aba selecionada
    4 marcar aba clicada como selecionada
    5 esconder o conteudo anterior
    6 mostrar o conteudo da aba selecionada
*/
// passo 1

const abas = document.querySelectorAll(".aba");

//passo 2
abas.forEach(aba => {
    aba.addEventListener("click", function(){

        if(aba.classList.contains("selecionado")){
        return;
        }
        selecionarAba(aba)
        
        mostrarInformacoesDaAba(aba)

    });
});
function selecionarAba(aba){
    //passo 3
    const abaSelecionada = document.querySelectorAll("aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    //passo 4
    aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba){
    //passo 5
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    //passo 6
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}