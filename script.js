let visivel = false; // Variável para controlar a visibilidade da mensagem

// Função que alterna o estado da variável 'visivel' e atualiza o conteúdo do parágrafo <p> com id "mensagem"
function exibirMensagem() { 
    const mensagem = document.getElementById("mensagem"); // Obtém o elemento <p> com id "mensagem"

    if (visivel) {
        mensagem.innerText = ""; // Se 'visivel' for verdadeiro, limpa o conteúdo do parágrafo
    } else {
        mensagem.innerText = "Ho’omau é uma das minhas palavras favoritas, por isso quero compartilhar com você que está aqui lendo. Ho’omau vem do havaiano e significa perseverar, continuar, manter-se firme mesmo quando as coisas ficam difíceis.";        
    }

    visivel = !visivel; // Inverte o valor de 'visivel' para a próxima chamada da função
}